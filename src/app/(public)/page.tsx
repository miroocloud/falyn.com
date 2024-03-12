import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import Anchor from "@/components/ui/anchor";
import { IconArrowRight } from "@tabler/icons-react";
import Hero from "@/components/ui/hero";

import Age from "@/components/home/age";
import FindMeOnSosial from "@/components/home/find-me";
import FeaturedProjects from "@/components/home/featured-projects";
import DiscordIsOnline from "@/components/Presense/discord/status-online";
import DiscordPresence from "@/components/Presense/discord/presence";
import SpotifyPresence from "@/components/Presense/spotify/presence";

export default function Home() {
  return (
    // md:pt-10 my-8 md:my-16
    <div className="space-y-16 pt-6 md:mt-16">
      <Hero id="about" className="space-y-6">
        <div className="flex flex-row items-center justify-between">
          <article className={cn("block max-w-xl", "prose dark:prose-invert")}>
            <p className="mb-2 w-min whitespace-nowrap font-medium lg:text-lg">Hey, I'm</p>
            <div className="flex items-center gap-1 md:gap-2">
              <h1 className="mb-0 space-x-1">Farid Nizam</h1>
              {/* <DiscordIsOnline /> */}
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

        {/* SOON */}
        {/* <div className="relative grid grid-cols-1 gap-3 md:grid-cols-2">
          <DiscordPresence />
          <SpotifyPresence />
        </div> */}
      </Hero>

      <Hero id="featured-projects" className="space-y-6">
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
        <FeaturedProjects />
      </Hero>

      {/* <Hero id="skill">
        <h2 className="mb-8 text-2xl font-bold">Skill</h2>
      </Hero> */}
    </div>
  );
}
