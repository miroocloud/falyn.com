import { Suspense } from "react";
import type { Metadata } from "next";
import Hero from "@components/ui/hero";
import Anchor from "@components/ui/anchor";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Project as ProjectData } from "@/_data/projects";
import ProjectCard from "@components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of Farid's projects done so far.",
};

export default function projects() {
  return (
    <Hero className="space-y-6 pt-2 md:mt-4">
      <div className="flex flex-col gap-7">
        <article className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="pt-3">Here are some of my projects.</p>
          </div>
          <Anchor
            className="opacity-80 hover:opacity-100"
            href="https://go.fayln.com/github"
            newWindow>
            <IconArrowUpRight size={38} />
          </Anchor>
        </article>

        <div className="mt-6">
          <div className="relative grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2">
            {ProjectData.map((project, i) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* <div className="flex w-full items-center justify-center pt-8">
        <Button className="gap-2 text-center">
          <IconRefresh />
          <span>Load More</span>
        </Button>
      </div> */}
        </div>
      </div>
    </Hero>
  );
}
