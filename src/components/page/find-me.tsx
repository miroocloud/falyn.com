"use client";
import Anchor from "@achor";
import { Mail } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Obfuscate } from "@south-paw/react-obfuscate-ts";

import sosialData from "~data/sosial";

export default function FindMeOn() {
  return (
    <>
      {sosialData.map((items, i) => (
        <TooltipProvider key={i}>
          <Tooltip>
            <TooltipTrigger className="cursor-default" asChild>
              <Anchor
                href={items.href}
                className="cursor-pointer p-1.5 rounded hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105"
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
    </>
  );
}
