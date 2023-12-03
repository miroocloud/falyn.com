"use client";
import { usePathname } from "next/navigation";
import Anchor from "@achor";
import { cn } from "@utils";
import type { Key } from "react";

type Items = {
  href: string;
  openWindows: boolean;
  name: string;
};

export default function MenuNav({ data }) {
  const pathname = usePathname();
  return (
    <>
      <ul className="hidden md:flex gap-y-2 flex-row md:items-center md:gap-x-1.5 md:gap-y-0 select-none">
        {data
          .filter((v: { showNavbar: boolean }) => v.showNavbar === true)
          .map((items: Items, i: Key) => {
            return (
              <li key={i}>
                <Anchor
                  href={items.href}
                  newWindow={items.openWindows}
                  className={cn(
                    "shrink-0 py-2 px-2.5 rounded-md transition-colors h-9 flex items-center relative text-sm",
                    pathname === items.href
                      ? "bg-gray-300 dark:bg-gray-600 font-bold"
                      : "hover:md:bg-gray-300 dark:hover:md:bg-gray-700 font-semibold md:hover:scale-105 md:transition-all md:duration-300"
                  )}
                >
                  {items.name}
                </Anchor>
              </li>
            );
          })}
      </ul>
    </>
  );
}
