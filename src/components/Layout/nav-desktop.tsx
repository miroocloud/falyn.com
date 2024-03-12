"use client";
import { usePathname } from "next/navigation";
import Anchor from "@/components/ui/anchor";
import { cn } from "@/lib/utils";
import type { Key } from "react";
import type { NavigationProps } from "@/types/data";

export default function DesktopNav({ navigation }: { navigation: NavigationProps[] }) {
  const pathname = usePathname();
  return (
    <div className="hidden select-none flex-row gap-y-2 md:flex md:items-center md:gap-x-1.5 md:gap-y-0">
      {navigation.map((item: NavigationProps, i: Key) => {
        return (
          <Anchor
            key={i}
            aria-label={item.name}
            href={item.href}
            newWindow={item.anchor?.newWindow}
            rel={item.anchor?.rel}
            className={cn(
              "relative flex h-9 shrink-0 items-center rounded-md px-2.5 py-2 transition-colors",
              pathname === item.href
                ? "bg-violet-300 font-bold dark:bg-violet-600"
                : "font-semibold md:transition-all md:duration-300 md:hover:scale-105 hover:md:bg-violet-200 dark:hover:md:bg-violet-800",
            )}>
            {item.name}
          </Anchor>
        );
      })}
    </div>
  );
}
