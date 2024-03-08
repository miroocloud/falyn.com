"use client";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { msToTime } from "@lib/time";
import { DiscordImageFallback } from "@components/svg/discord";
import { IconBrandDiscordFilled, IconAlarm } from "@tabler/icons-react";

const color = "rgba(88, 101, 242, 0.90)";
export default function DiscordPresence() {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative cursor-default rounded-xl p-3 text-white"
    >
      <div className="absolute right-0 top-0 p-2.5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default" asChild>
              <IconBrandDiscordFilled color="white" />
            </TooltipTrigger>
            <TooltipContent
              style={{ color: color }}
              className="select-none bg-white font-semibold"
            >
              Discord
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-row">
        <div className="flex gap-2">
          <div className="relative mx-0">
            <DiscordImageFallback />
            {/* <img
              src="https://cdn.discordapp.com/app-assets/383226320970055681/808842276184784916.webp"
              width={80}
              height={80}
              alt="discord-presence"
              referrerPolicy="no-referrer"
              loading="lazy"
            /> */}
          </div>

          <div className="flex max-w-[19rem] flex-col">
            <p className="whitespace-pre text-base font-semibold">
              Visual Studio Code
            </p>
            <div className="space-y-0.5 text-xs">
              <p>📄 windows.ts</p>
              <p>📂 bob-server-controller</p>
              <p className="flex gap-1">
                <IconAlarm size={16} />
                {`3.4 Hrs elapsed`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
