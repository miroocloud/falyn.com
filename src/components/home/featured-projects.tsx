"use client";
import ProjectCard from "@components/projects/project-card";
import type { Key } from "react";
import type { ProjectProps } from "@/types/data";

import { Project } from "@/_data/projects";

export default function FeaturedProjects() {
  return (
    <div className="relative grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2">
      {Project.filter((p) => p.featured)
        .slice(0, 4)
        .map((project: ProjectProps) => (
          <ProjectCard key={project.id} {...project} />
        ))}
    </div>
  );
}
