import Image from "next/image";
import Anchor from "@achor";
import Card from "../Projects/card-projects";
import { type Projects } from "contentlayer/generated";
import { CardDescription, CardTitle } from "@components/ui/card";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

export default function FeaturedProjects(props: Projects) {
  const { _id, title, summary, homepage, repo, stack, maskColor } = props;
  return (
    <>
      <Card className="p-4">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-4 md:space-y-0">
          <div
            style={{ backgroundColor: maskColor || "black" }}
            className="mask p-4 md:p-2"
          >
            <Image
              src={`/img-content/project/${title.toLocaleLowerCase()}.png`}
              quality={80}
              alt={`${title} Logo`}
              width={56}
              height={56}
            />
          </div>

          <div className="block">
            <div className="flex flex-col space-y-2 object-cover object-left">
              <CardTitle className="flex flex-row items-center space-x-2 text-xl">
                {title}
              </CardTitle>
              <CardDescription className="text-[15px] leading-relaxed">
                {summary}
              </CardDescription>
            </div>

            <div className="absolute left-0 top-0 flex h-full w-full select-none items-center justify-center gap-1 rounded-xl bg-secondary text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-80">
              <div className="flex flex-row">
                <Anchor
                  href={`https://go.fayln.com/github/${repo}`}
                  newWindow
                  className="flex gap-1 hover:text-sky-500"
                >
                  <IconBrandGithub size={20} />
                  Github
                </Anchor>
                <span className="mx-1">|</span>
                <Anchor
                  href={homepage}
                  newWindow
                  className="flex gap-1 hover:text-sky-500"
                >
                  <IconWorld size={20} />
                  View Website
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
