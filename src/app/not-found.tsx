import type { Metadata } from "next";
import Anchor from "@/components/ui/anchor";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound({ err }: { err?: string }) {
  return (
    <section className="grid h-screen place-content-center">
      <div className="mb-6 space-y-4 text-center">
        <h1 className="select-none text-9xl font-black">404</h1>
        <p className="text-sm font-light md:text-lg">
          {err || "We couldn't find the page you're looking for you."}
        </p>
      </div>

      <div className="text-center">
        <Button asChild>
          <Anchor>Back Home</Anchor>
        </Button>
      </div>
    </section>
  );
}
