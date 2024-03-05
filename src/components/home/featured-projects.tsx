"use client";
import ProjectCard from "@components/projects/project-card";
import { ProjectProps } from "@/types/data";

export default function FeaturedProjects({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="relative grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2">
      {projects
        .filter((p) => p.featured)
        .slice(0, 4)
        .map((project, i) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
    </div>
  );
}
