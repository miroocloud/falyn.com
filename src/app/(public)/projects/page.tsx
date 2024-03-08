import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Separator } from "@components/ui/separator";
import { allProjects } from "contentlayer/generated";

import Hero from "@components/Layout/hero";
// import ProjectsList from "@components/page/projects-list";
import Projects from "@components/page/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of Farid's projects.",
};

export default function page() {
  return (
    <Hero className="my-8 space-y-6 pt-8">
      <article className="mx-auto">
        <div className="space-x-1">
          <h1 className="text-2xl font-semibold tracking-tighter lg:text-4xl">
            Projects
          </h1>
          <p className="pt-3 text-lg text-muted-foreground">
            Several projects that I have worked on, both private and open
            source.
          </p>
        </div>
      </article>
      <Separator className="bg-slate-300 md:max-w-xs" />

      <Suspense fallback={<span>Loading projects...</span>}>
        <div className="grid gap-4 py-10 md:grid-cols-2">
          {allProjects.map((project, i) => (
            <Projects key={i} {...project} />
          ))}
        </div>
      </Suspense>
    </Hero>
  );
}
