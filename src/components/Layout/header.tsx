"use client";
import Anchor from "@achor";
import { cn } from "@utils";
import { Separator } from "@components/ui/separator";
import ThemeSwitcher from "./theme-switch";
import MenuNav from "./menu-nav";
import MobileNav from "./mobile-nav";
import useScroll from "@/hooks/useScroll";

import MenuNavigation from "~data/menu";

export default function Header() {
  const scroll = useScroll();

  return (
    <>
      <header
        className={cn(
          "base-header",
          scroll === "Down" && "backdrop-blur-xl backdrop-brightness-80"
        )}
      >
        <Anchor
          aria-label="Homepage"
          className="flex justify-center items-center gap-x-2 select-none"
        >
          <div className="flex tracking-tigh leading-none font-bold text-black/90 dark:text-white/90">
            fayln.com
          </div>
        </Anchor>

        <nav className="flex items-center gap-2">
          <MenuNav data={MenuNavigation} />
          <Separator
            orientation="vertical"
            className="hidden md:flex h-8 bg-gray-400 mr-1"
          />
          <ThemeSwitcher />
          <MobileNav data={MenuNavigation} />
        </nav>
      </header>
    </>
  );
}
