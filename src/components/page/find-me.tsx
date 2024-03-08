"use client";
import Anchor from "@achor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import sosialData from "~data/sosial";

export default function FindMeOn() {
  return (
    <div className="flex gap-3">
      {sosialData.map((items, i) => (
        <TooltipProvider key={i}>
          <Tooltip>
            <TooltipTrigger className="cursor-default" asChild>
              <Anchor
                href={items.href}
                aria-label={items.name}
                className="cursor-pointer rounded p-1.5 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700"
                newWindow
                noFollow
              >
                {items.icon}
              </Anchor>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="select-none">
              {items.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
