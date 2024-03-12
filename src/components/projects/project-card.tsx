"use client";
import Anchor from "@/components/ui/anchor";
import Balancer from "react-wrap-balancer";

import { ProjectProps } from "@/types/data";
import ProjectLinks from "./project-links";
import { BadgeNew } from "@/components/common/badge";

export default function ProjectCard(project: ProjectProps) {
  const title = `projects-${project.name.toLowerCase()}`;
  const category = project.category.replaceAll(/\s/g, "_").toLocaleLowerCase();
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-secondary shadow hover:shadow-md"
      title={title}>
      {project?.new && <BadgeNew />}
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">
              <Anchor className="hover:opacity-60" data-umami-event={title}>
                {project.name}
              </Anchor>
            </h3>
          </div>
          <p className="leading-relaxed opacity-80 selection:opacity-100">
            <Balancer>{project.desc}</Balancer>
          </p>
          <ul className="-ml-2 flex cursor-default list-none flex-wrap items-center text-white">
            {project.stack?.map((stack, i) => (
              <li
                key={i}
                className="m-1 rounded-lg bg-[#192742] px-2 py-1 text-sm hover:opacity-75 dark:bg-[#343f56]">
                {stack.name}
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <div className="inline-flex gap-1">
              <ProjectLinks
                homepage={project.homepage}
                repositories={project.repositories}
                umamiAnal={title}
              />
            </div>
            <div className="cursor-default p-2 text-muted-foreground">{`#${category}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
