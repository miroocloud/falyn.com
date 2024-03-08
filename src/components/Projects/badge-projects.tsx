"use client";
import { cn } from "@utils";
import { IconCodePlus, IconPin } from "@tabler/icons-react";

export function BadgeNew() {
  return (
    <div
      className={cn(
        "absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl px-2 py-1",
        "bg-lime-300 text-[13px] font-medium text-emerald-950",
      )}
    >
      <IconCodePlus size={15} />
      <span>New</span>
    </div>
  );
}

export function BadgeFeatured() {
  return (
    <div
      className={cn(
        "absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl px-2 py-1",
        "bg-emerald-300 text-[13px] font-medium text-emerald-950",
      )}
    >
      <IconPin size={15} />
      <span>Featured</span>
    </div>
  );
}
