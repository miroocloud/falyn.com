"use client";
import { Skeleton } from "@ui/skeleton";
import { cn } from "@utils";

export function SkeletonFeaturedProjects() {
  return (
    <div className="mb-12 grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2">
      <div
        className={cn(
          "group relative flex items-center gap-x-4 overflow-hidden rounded-lg border p-4 py-12",
          "border-transparent bg-gray-200 shadow hover:border-zinc-200 hover:shadow-md dark:bg-gray-800 dark:hover:border-zinc-700"
        )}>
        <Skeleton className="h-16 w-16 rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[280px]" />
          <Skeleton className="h-4 w-[260px]" />
          <Skeleton className="h-4 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
