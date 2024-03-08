import Anchor from "@achor";
import { IconArrowRight } from "@tabler/icons-react";
import Hero from "@components/Layout/hero";
import { allProjects } from "contentlayer/generated";

import Age from "@components/page/age";
import FindMeOn from "@components/page/find-me";
import FeaturedProjects from "@components/page/featured-projects";
import DIscordIsOnline from "@components/Presense/discord/status-online";
import DiscordPresence from "@components/Presense/discord/presence";
import SpotifyPresence from "@components/Presense/spotify/presence";

export default function Home() {
  return (
    // md:pt-10 my-8 md:my-16
    <div className="space-y-16 pt-6 md:mt-16">
      <Hero id="about" className="space-y-6">
        <div className="flex flex-row items-center justify-between">
          <article className="block max-w-xl">
            <div className="mb-3 flex items-center gap-1 md:gap-2">
              <h1 className="text-2xl font-bold leading-[1] tracking-tight text-foreground sm:text-4xl">
                Farid Nizam
              </h1>
              <DIscordIsOnline className="ml-2.5" />
            </div>

            <div className="mb-4">
              <p className="font-medium text-muted-foreground sm:text-base">
                <Age birthday={process.env.BIRTHDAY_DATE} className="pr-1.5" />
                <span>y/o • Network Engineering • Pull-stack Developer</span>
              </p>
            </div>

            <div className="max-w-2xl">
              <h2 className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-300">
                A Network Engineering also a Pull-stack Developer (pull
                everything from the internet). Loves to build things for
                humanity&apos;s needs. Dreaming ideas and making them come true
                is where my passion lies.
              </h2>
            </div>
          </article>

          <div
            style={{ backgroundColor: "blueviolet" }}
            className="mask hidden p-6 sm:table-cell"
          >
            <img
              src="https://avatars-githubusercontent.webp.se/u/29797712"
              alt="Farid's Logo"
              width={180}
              height={180}
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-2 py-1">
          <p>Find me on</p>
          <FindMeOn />
        </div>

        <div className="relative grid grid-cols-1 gap-3 md:grid-cols-2">
          <DiscordPresence />
          <SpotifyPresence />
        </div>
      </Hero>

      <Hero id="featured-projects" className="space-y-2">
        <h2 className="mb-8 text-2xl font-bold">Featured Projects</h2>
        <div className="flex cursor-default flex-col space-y-6">
          {allProjects
            .filter((f) => f.featured)
            .slice(0, 4)
            .map((project, i) => (
              <FeaturedProjects key={i} {...project} />
            ))}
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

      {/* <Hero id="skill">
        <h2 className="mb-8 text-2xl font-bold">Skill</h2>
      </Hero> */}
    </div>
  );
}
