"use client";
import Anchor from "@/components/ui/anchor";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FindMeSosial } from "@/_data/sosial";

export default function FindMeOnSosial() {
  return (
    <div className="flex gap-3">
      {FindMeSosial.map((items, i) => (
        <TooltipProvider key={i}>
          <Tooltip>
            <TooltipTrigger className="cursor-default" asChild>
              <Anchor
                href={items.href}
                aria-label={items.name}
                className="cursor-pointer rounded p-1.5 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700"
                newWindow={items.anchor.newWindow}
                rel={items.anchor.rel}>
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
