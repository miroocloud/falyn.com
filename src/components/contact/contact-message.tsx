"use client";
import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import { RequiredIndicator } from "@ui/required-indicator";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { Button } from "@ui/button";
import { Label } from "@ui/label";
import { toast } from "sonner";

import { IconRefresh, IconSend, IconLoader2 } from "@tabler/icons-react";
import { ContactSchema, ContactValues } from "./schema";

type WidgetStatus = "solved" | "error" | "expired" | null;

export default function ContactMessage() {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [status, setStatus] = useState<WidgetStatus>(null);
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      discord: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactValues) => {
    setIsLoading(true);
    const res = await fetch("https://fayln-form.tunadev.workers.dev/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "contact", ...data, captcha: { token } }),
      cache: "no-cache",
    });

    switch (res.status) {
      case 204: {
        onReset();
        toast.success("Your message has been sent.");
        setIsLoading(false);
        break;
      }
      case 400: {
        const data: string = await res.json();
        onReset();
        toast.warning(data ? data : "Hmm...");
        setIsLoading(false);
        break;
      }
      default: {
        onReset();
        toast.error("An error ocurred while sending the message.");
        setIsLoading(false);
        break;
      }
    }
  };

  const onReset = () => {
    form.reset();
    turnstileRef.current?.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label>
          Name <RequiredIndicator />
        </Label>
        <Input type="text" placeholder="Farid Nizam" autoComplete="on" {...form.register("name")} />
      </div>

      <div className="relative grid grid-flow-col-dense gap-2">
        <div className="space-y-2">
          <Label>
            Email <RequiredIndicator />
          </Label>
          <Input
            type="email"
            placeholder="me@example.com"
            autoComplete="on"
            {...form.register("email")}
          />
        </div>

        <div className="space-y-2">
          <Label>DIscord</Label>
          <Input type="text" placeholder="phibicool or phibi#1938" {...form.register("discord")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label>
          Subject <RequiredIndicator />
        </Label>
        <Input type="text" placeholder="Your Subject" {...form.register("subject")} />
      </div>

      <div className="space-y-2">
        <Label>
          Message <RequiredIndicator />
        </Label>
        <Textarea
          placeholder="Leave us a message"
          className="resize-none"
          maxLength={4090}
          cols={50}
          rows={8}
          {...form.register("message")}
        />
      </div>

      <div className="flex md:justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE}
          onError={() => setStatus("error")}
          onExpire={() => setStatus("expired")}
          onSuccess={(token) => {
            setToken(token);
            setStatus("solved");
          }}
        />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="relative grid select-none grid-flow-col-dense gap-3">
          <Button
            type="reset"
            variant="destructive"
            className="group"
            onClick={() => onReset()}
            disabled={!form.formState.isDirty || isLoading}>
            <IconRefresh className="duration-800 mr-2 h-4 w-4 group-hover:animate-spin" />
            Reset
          </Button>

          <Button
            type="submit"
            className="group px-6 md:px-16"
            disabled={!form.formState.isValid || status !== "solved" || isLoading}>
            Send Message
            {isLoading ? (
              <IconLoader2 className="ml-2 h-4 w-4 animate-spin" />
            ) : (
              <IconSend className="ml-2 h-4 w-4 transition duration-200 group-hover:rotate-45 group-active:translate-x-4" />
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
