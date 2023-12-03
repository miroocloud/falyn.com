"use client";
import { useYearsAgo } from "@/hooks/useTimeAgo";
import { cn } from "@utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/** Format: month/days/years */
export default function Age({
  birthday,
  className = "",
}: {
  birthday: string;
  className?: string;
}) {
  const age = useYearsAgo(new Date(birthday));
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={cn("cursor-default", className)} asChild>
          <span>{Math.floor(age)}</span>
        </TooltipTrigger>
        <TooltipContent>{age.toFixed(8)}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
