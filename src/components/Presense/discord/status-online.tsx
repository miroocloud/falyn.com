"use client";
import { cn } from "@utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const StatusColor = {
  online: "#43b581",
  idle: "#faa61a",
  dnd: "#f04747",
  offline: "#747f8d",
};

export default function DIscordIsOnline({
  className = "",
}: {
  className?: string;
}) {
  const status: string = "online";
  const activeOnMobile: boolean = false;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-default" asChild>
          <div className={cn("flex items-center", className)}>
            {!activeOnMobile && (
              <svg
                height="38"
                width="24"
                style={{ color: StatusColor[status] }}
              >
                <rect
                  width="24"
                  height="24"
                  x="0"
                  y="7"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0"
                  mask={`url(#svg-mask-status-${status})`}
                />
              </svg>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="select-none">
          {status === "dnd"
            ? "Do not disturb"
            : status === "online" && activeOnMobile
            ? "Online on Mobile"
            : status?.replace(
                /\w\S*/g,
                (txt) =>
                  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
              )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
