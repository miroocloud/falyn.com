"use client";
import Marquee from "react-fast-marquee";
import { Stacks, TectStacks } from "@/_data/stacks";

export default function Stack({ pauseOnHover }: { pauseOnHover?: boolean }) {
  return (
    <>
      <Marquee direction="left" speed={40}>
        <div className="flex flex-wrap items-center gap-3">
          {TectStacks.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1.5 first:ml-2.5">
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee direction="right" speed={50}>
        <div className="flex flex-wrap items-center gap-3">
          {Stacks.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1.5 first:ml-2.5">
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
}
