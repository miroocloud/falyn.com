import Anchor from "@achor";
import { IconArrowRight } from "@tabler/icons-react";

import Age from "@components/page/age";
import FindMeOn from "@components/page/find-me";
import FeaturedProjects from "@components/page/projects-featured";
import Hero from "@components/Layout/hero";

export default function Home() {
  return (
    <>
      <Hero className="space-y-6 max-w-prose pt-10 my-8 md:my-16">
        <article className="mx-auto">
          <div className="flex items-center gap-1 md:gap-2 mb-3">
            <h1 className="text-2xl font-bold text-foreground sm:text-4xl leading-[1] tracking-tight">
              Farid Nizam
            </h1>
          </div>

          <div className="mb-4">
            <p className="font-medium text-muted-foreground sm:text-lg">
              <Age birthday={process.env.BIRTHDAY_DATE} className="pr-1.5" />
              <span>y/o • Network Engineering • Pull-stack Developer</span>
            </p>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-neutral-800 dark:text-neutral-300 text-lg leading-relaxed">
              A Network Engineering also a Pull-stack Developer (pull everything
              from the internet). Loves to build things for humanity&apos;s
              needs. Dreaming ideas and making them come true is where my
              passion lies.
            </h2>
          </div>
        </article>

        <div className="py-1 space-y-2">
          <p>Find me on</p>
          <div className="flex gap-3">
            <FindMeOn />
          </div>
        </div>
      </Hero>

      <Hero className="pb-10">
        <h2 className="text-2xl font-bold md:text-center">Featured Projects</h2>
        <div className="relative grid grid-flow-row-dense grid-cols-1 gap-6 md:grid-cols-2 my-10">
          <FeaturedProjects />
        </div>

        <div className="flex">
          <Anchor
            href="/projects"
            className="group my-2 flex items-center gap-3 text-lg font-medium"
          >
            <span>All Projects</span>
            <IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
          </Anchor>
        </div>
      </Hero>
    </>
  );
}
