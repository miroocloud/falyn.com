import React, { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@components/Layout/hero";
import ContactForm from "@components/Form/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Farid Nizam for collaboration, discussions, or inquiries.",
};

export default function page() {
  return (
    <Hero className="pt-8 my-8">
      <article className="max-w-none mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-2xl lg:text-4xl tracking-tight">
            Contact
          </h1>
          <p className="pt-3 text-lg lg:text-xl">
            I'm excited to hear from you!
          </p>
        </div>
      </article>

      <div className="max-w-xl mt-10 relative justify-center mx-auto">
        <ContactForm />
      </div>
    </Hero>
  );
}
