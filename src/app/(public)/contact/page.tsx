import type { Metadata } from "next";
import Hero from "@/components/ui/hero";
import ContactMessage from "@/components/contact/contact-message";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact",
  description: "If you want to reach out or just want to say hi, you can contact me directly.",
};

export default function Contact() {
  return (
    <Hero className="space-y-6 pt-2 md:mt-4">
      <div className="flex flex-col gap-7">
        <article className="relative text-center">
          <h1 className="text-4xl font-bold">Let's Talk</h1>
          <p className="pt-3">
            If you want to reach out or just want to say hi, you can contact me directly.
          </p>
        </article>
      </div>

      <div className="relative mx-auto mt-6 p-2">
        <div className="relative mx-auto max-w-xl justify-center">
          <ContactMessage />
        </div>
      </div>
    </Hero>
  );
}
