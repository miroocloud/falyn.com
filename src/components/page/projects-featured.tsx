"use client";
import Anchor from "@achor";
import Image from "next/image";
import { allProjects } from "contentlayer/generated";

export default function FeaturedProjects() {
  return (
    <>
      {allProjects
        .filter((v) => v.featured)
        .slice(0, 4)
        .map((project) => {
          const { _id, title, summary, maskColor, homepage } = project;

          return (
            <div
              key={_id}
              className="overflow-hidden group shadow-md hover:shadow-lg relative rounded-lg border border-gray-700/40 dark:border-gray-700 p-4 dark:hover:shadow-gray-800"
            >
              <Anchor href={homepage} newWindow>
                <div className="w-full flex justify-center items-center gap-4">
                  <div
                    style={{ backgroundColor: maskColor || "black" }}
                    className="mask p-1 md:p-2"
                  >
                    <Image
                      className="relative m-4 h-8 w-8 shrink-0 md:h-11 md:w-11"
                      src={`/img-content/project/${title.toLocaleLowerCase()}.png`}
                      quality={80}
                      alt={`${title} Logo`}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex-1 md:px-2 py-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                      {title}
                    </h2>
                    <div className="text-muted-foreground tracking-tigh text-base">
                      {summary}
                    </div>
                  </div>
                </div>
              </Anchor>
            </div>
          );
        })}
    </>
  );
}
