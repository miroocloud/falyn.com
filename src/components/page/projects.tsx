"use client";
import Anchor from "@achor";
import Image from "next/image";
import Card from "../Projects/card-projects";
import { type Projects } from "contentlayer/generated";
import { CardDescription, CardTitle } from "@components/ui/card";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

export default function Projects(props: Projects) {
  const { _id, title, summary, homepage, stack, maskColor } = props;
  return (
    <>
      <Card badge="new">
        <div className="flex h-40 w-full items-center justify-center rounded-t-xl transition-all duration-200">
          <div
            style={{ backgroundColor: maskColor || "black" }}
            className="mask p-4"
          >
            <Image
              src={`/img-content/project/${title.toLocaleLowerCase()}.png`}
              quality={80}
              alt={`${title} Logo`}
              width={68}
              height={68}
            />
          </div>
        </div>

        <div className="block">
          <div className="object-cover object-center">
            <div className="space-y-2 p-5">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-[15px] leading-relaxed">
                {summary}
              </CardDescription>
            </div>
          </div>

          <div className="absolute left-0 top-0 flex h-full w-full select-none items-center justify-center bg-secondary text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-80">
            <div className="flex flex-row">
              <Anchor
                href={`https://go.fayln.com/github/`}
                newWindow
                className="flex gap-1 hover:text-sky-500"
              >
                <IconBrandGithub size={20} />
                <span>Github</span>
              </Anchor>
              <span className="mx-1">|</span>
              <Anchor
                href={homepage}
                newWindow
                className="flex gap-1 hover:text-sky-500"
              >
                <IconWorld size={20} />
                <span>View Website</span>
              </Anchor>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
