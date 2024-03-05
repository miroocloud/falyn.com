import { Suspense } from "react";
import Balancer from "react-wrap-balancer";
import { cn } from "@utils";
import Hero from "@ui/hero";

import Age from "@components/common/age";
import FindMeOnSosial from "@components/home/find-me";
import FeaturedProjects from "@components/home/featured-projects";
import Stack from "@components/home/stack";
import { BadgeOnline } from "@components/common/badge";

import { Project } from "@/_data/projects";

export default function Home() {
  return (
    <div className="space-y-16 pt-6 md:mt-8">
      <Hero id="about" className="space-y-6">
        <div className="flex flex-row items-center justify-between">
          <article className={cn("block max-w-xl", "prose dark:prose-invert")}>
            <p className="mb-2 w-min whitespace-nowrap font-medium lg:text-lg">Hey, I'm</p>
            <div className="flex items-center gap-1 md:gap-2">
              <h1 className="mb-0 space-x-1">Farid Nizam</h1>
            </div>
            <p className="m-0 space-x-1 text-muted-foreground">
              <Age
                birthday={process.env.BIRTHDAY_DATE}
                className="hover:underline hover:underline-offset-2"
              />
              <span>y/o • Network Engineering • Pull-stack Developer</span>
            </p>
            <h3 className="mt-4">
              <Balancer className="text-lg font-medium leading-relaxed text-gray-500 dark:text-neutral-300">
                A Network Engineering also a Pull-stack Developer (pull everything from the
                internet). Dreaming ideas and making them come true is where my passion lies. I
                currently mostly write projects for my own personal use, as part of teams.
              </Balancer>
            </h3>
          </article>
          <div
            style={{ backgroundColor: "blueviolet" }}
            className="mask hidden select-none p-6 sm:table-cell">
            <img
              src="https://avatars-githubusercontent.webp.se/u/29797712"
              alt="Farid's Logo"
              width={180}
              height={180}
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold">Find me on</p>
          <FindMeOnSosial />
        </div>
      </Hero>

      <Hero id="featured-projects" className="space-y-6">
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
        <FeaturedProjects projects={Project} />
      </Hero>

      <Hero id="stack" className="space-y-6">
        <h2 className="mb-8 text-3xl font-bold">Stack</h2>
        <Stack />
      </Hero>
    </div>
  );
}
