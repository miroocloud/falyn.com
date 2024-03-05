"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@utils";
import useScroll from "@/hooks/useScroll";

import Anchor from "@ui/anchor";
import { Separator } from "@ui/separator";
import { Button } from "@ui/button";

import ThemeSwitcher from "./theme-switch";
import Trakteer from "./trakteer";

import type { Key } from "react";
import type { NavigationProps } from "@/types/data";
import { NavHeader } from "@/_data/navigation";
import { IconSlashes } from "@tabler/icons-react";

export default function Header() {
  const scroll = useScroll();
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header
      className={cn(
        "l-header z-50 mb-6",
        scroll === "Down" && "backdrop-brightness-80 backdrop-blur-xl"
      )}>
      <div className="select-none">
        <Anchor aria-label="homepage">
          <div
            className={cn(
              "flex items-center gap-1 font-black leading-none",
              "group",
              "transition duration-200 hover:transition"
            )}>
            <div
              className={cn(
                "flex justify-center gap-1.5",
                "opacity-100 group-hover:opacity-0",
                "transition duration-300"
              )}>
              <div className="text-2xl">@fayln</div>
              <div
                className={cn(
                  "my-0.5 flex h-7 w-7 items-center justify-center rounded-md",
                  "border-2 border-violet-600 shadow shadow-violet-400",
                  pathname === "/" && "bg-violet-600 text-white"
                )}>
                <IconSlashes size={22} />
              </div>
            </div>

            <div className="absolute space-x-1 text-2xl tracking-tight opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-violet-900 dark:text-violet-600">Farid</span>
              <span>Nizam</span>
            </div>
          </div>
        </Anchor>
      </div>

      <nav className="flex items-center gap-2">
        {/* Desktop */}
        <div className="hidden select-none flex-row gap-y-2 md:flex md:items-center md:gap-x-1.5 md:gap-y-0">
          {NavHeader.map((item: NavigationProps, i: Key) => {
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
                    : "font-semibold md:transition-all md:duration-300 md:hover:scale-105 hover:md:bg-violet-200 dark:hover:md:bg-violet-800"
                )}>
                {item.name}
              </Anchor>
            );
          })}
        </div>
        {/* END Desktop */}
        <Separator orientation="vertical" className="mr-1 hidden h-8 bg-gray-400 md:flex" />
        <ThemeSwitcher />
        {/* Mobile */}
      </nav>
    </header>
  );
}
