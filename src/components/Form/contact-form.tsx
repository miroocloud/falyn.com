"use client";
import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RequiredIndicator } from "@components/ui/required-indicator";
import { Obfuscate } from "@south-paw/react-obfuscate-ts";
import { IconRefresh, IconSend, IconLoader2 } from "@tabler/icons-react";

import { ContactSchema, ContactFormValues } from "./schema";
type WidgetStatus = "solved" | "error" | "expired" | null;

const siteKey = "0x4AAAAAAAJougbuCrKABoBu";

export default function ContactForm() {
  const { toast } = useToast();
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [status, setStatus] = useState<WidgetStatus>(null);
  const [token, setToken] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      discord: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsLoading(true);
    const res = await fetch(
      `https://form-api.fayln.com/api/submit-contact?token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ type: "contact", ...data }),
      }
    );

    if (res.status === 200) {
      setIsLoading(false);
      form.reset();
      turnstileRef.current?.reset();
      toast({
        title: "Successfully!",
        description: "Your message has been sent.",
        className: "toast-success",
      });
    } else if (res.status === 500) {
      setIsLoading(false);
      form.reset();
      turnstileRef.current?.reset();
      toast({
        title: "Failed!",
        description: "An error ocurred while sending the message.",
        className: "toast-error",
      });
    } else {
      const data = await res.json();
      setIsLoading(false);
      form.reset();
      turnstileRef.current?.reset();
      toast({
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
        className: "toast-warning",
      });
    }
  }

  return (
    <div className="rounded border -m-4 p-4 md:p-8 shadow-md focus:shadow-lg shadow-gray-300 before:shadow-gray-400/50 dark:shadow-gray-700 dark:focus:shadow-gray-700/50">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <RequiredIndicator />
                </FormLabel>
                <FormControl>
                  <Input placeholder="Farid Nizam" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="relative grid grid-flow-col-dense gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <RequiredIndicator />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="me@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discord"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discord</FormLabel>
                  <FormControl>
                    <Input placeholder="phibicool or phibi#1938" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Messaage <RequiredIndicator />
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave us a message"
                    className="resize-none"
                    maxLength={4090}
                    cols={50}
                    rows={8}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex md:justify-center">
            <Turnstile
              ref={turnstileRef}
              injectScript={false}
              siteKey={siteKey}
              onError={() => setStatus("error")}
              onExpire={() => setStatus("expired")}
              onSuccess={(token) => {
                setToken(token);
                setStatus("solved");
              }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="relative grid grid-flow-col-dense gap-3 select-none">
              <Button
                type="reset"
                variant="destructive"
                className="group"
                onClick={() => form.reset()}
                disabled={!form.formState.isDirty || isLoading}
              >
                <IconRefresh className="mr-2 h-4 w-4 duration-800 group-hover:animate-spin" />
                Reset Field
              </Button>

              <Button
                type="submit"
                className="group px-6 md:px-16"
                disabled={
                  !form.formState.isValid || status !== "solved" || isLoading
                }
              >
                Send Message
                {isLoading ? (
                  <IconLoader2 className="ml-2 h-4 w-4 animate-spin" />
                ) : (
                  <IconSend className="ml-2 h-4 w-4 transition duration-200 group-hover:rotate-45 group-active:translate-x-4" />
                )}
              </Button>
            </div>

            <div className="cursor-default text-sm flex md:justify-end">
              <span className="mr-1 tracking-tight">or email me at</span>
              <Obfuscate
                email
                className="cursor-pointer underline underline-offset-2 text-sky-600 dark:text-sky-500"
              >
                farid@fayln.com
              </Obfuscate>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
