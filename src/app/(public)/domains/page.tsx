import type { Metadata } from "next";
import Hero from "@components/layout/hero";

export const metadata: Metadata = {
  title: "Domain List",
  description: "A root domain list owned on a registry level by Farid Nizam (fayln.com).",
};

export default function page() {
  return (
    <>
      <Hero className="pt-8">
        <div className="flex items-center justify-between space-y-2">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Domain List</h1>
            <p className="text-muted-foreground">A root domain list owned on a registry level!</p>
          </div>

          <div className="hidden items-center md:flex">
            <div className="pr-1.5">Last updated:</div>
            <div className="text-secondary-foreground">12/12/12</div>
          </div>
        </div>

        <div className="my-1 text-sm md:hidden">Last updated: 12/12/12</div>

        <div className="space-y-4">
          <div className="rounded">{/* <DomainTable /> */}</div>
        </div>
      </Hero>
    </>
  );
}
