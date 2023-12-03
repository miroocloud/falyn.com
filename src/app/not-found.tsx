import type { Metadata } from "next";
import Hero from "@components/Layout/hero";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound({ err }: { err?: string }) {
  return (
    <section className="p-28">
      <div className="mb-40 mt-52 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl md:text-7xl font-semibold select-none">404</h1>
        <p className="text-sm md:text-lg font-light mx-10">
          {err || "We couldn't find the page you're looking for."}
        </p>
      </div>
    </section>
  );
}
