"use client";
import Anchor from "@/components/ui/anchor";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

type Links = {
  homepage?: string;
  repositories?: string;
  umamiAnal?: string;
};

export default function ProjectLinks({ homepage, repositories, umamiAnal }: Links) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {homepage && (
            <Anchor
              className="cursor-pointer rounded p-1.5 transition-all hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700"
              href={homepage}
              newWindow
              data-umami-event={umamiAnal}>
              <IconExternalLink className="h-6 w-6" />
            </Anchor>
          )}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="select-none">
          Visit
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          {repositories && (
            <Anchor
              className="cursor-pointer rounded p-1.5 transition-all hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700"
              href={repositories}
              newWindow
              data-umami-event={`${umamiAnal}-repo`}>
              <IconBrandGithub className="h-6 w-6" />
            </Anchor>
          )}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="select-none">
          Github
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
