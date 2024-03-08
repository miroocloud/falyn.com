"use client";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconBrandSpotify } from "@tabler/icons-react";

const color = "rgba(30, 215, 96, 0.90)";
export default function SpotifyPresence() {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative text-white p-3 rounded-xl cursor-default"
    >
      <div className="absolute p-2.5 top-0 right-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default" asChild>
              <IconBrandSpotify color="white" />
            </TooltipTrigger>
            <TooltipContent
              style={{ color: color }}
              className="select-none bg-white font-semibold"
            >
              Spotify
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-row">
        <div className="flex gap-2">
          <div className="mx-0">
            <img
              src="https://i.scdn.co/image/ab67616d0000b273d8d64842e3dca31871437276"
              width={80}
              height={80}
              alt="discord-presetr4  mnce"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col max-w-[19rem]">
            <p className="text-base font-semibold whitespace-pre">
              Yellowtail Sashimi
            </p>
            <div className="text-xs">
              <p>Steelo, Curren$y</p>
              {/* <p>📂 bob-server-controller-api</p>
              <p>{`3.4 Hrs elapsed`}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
