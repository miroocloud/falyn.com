import React, { Suspense } from "react";
import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";

import Hero from "@components/Layout/hero";
import ProjectsList from "@components/page/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of Farid's projects.",
};

export default function page() {
  return (
    <Hero className="pt-8 my-8">
      <article className="max-w-none mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-2xl lg:text-4xl tracking-tight">
            Projects
          </h1>
          <p className="pt-3 text-lg lg:text-xl">
            Several projects that I have worked on, both private and open
            source.
          </p>
        </div>
      </article>

      <Suspense fallback={<span>Loading projects...</span>}>
        <div className="grid gap-4 md:grid-cols-2 py-10">
          {allProjects.map((project) => (
            <ProjectsList key={project._id} {...project} />
          ))}
        </div>
      </Suspense>
    </Hero>
  );
}
