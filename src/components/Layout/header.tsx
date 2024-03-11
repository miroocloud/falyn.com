"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IconSlashes } from "@tabler/icons-react";
import { cn } from "@utils";
import useScroll from "@/hooks/useScroll";
import Anchor from "@anchor";
import { Separator } from "@components/ui/separator";
import ThemeSwitcher from "./theme-switch";
import DesktopNav from "./nav-desktop";
import MobileNav from "./nav-mobile";

import { NavHeader } from "@/_data/navigation";

export default function Header() {
  const scroll = useScroll();
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header
      className={cn(
        "l-header z-50 mb-6",
        scroll === "Down" && "backdrop-brightness-80 backdrop-blur-xl",
      )}>
      <div className="select-none">
        <Anchor aria-label="homepage">
          <div
            className={cn(
              "flex items-center gap-1 font-black leading-none",
              "group",
              "transition duration-200 hover:transition",
            )}>
            <div
              className={cn(
                "flex justify-center gap-1.5",
                "opacity-100 group-hover:opacity-0",
                "transition duration-300",
              )}>
              <div className="text-2xl">@fayln</div>
              <div
                className={cn(
                  "my-0.5 flex h-7 w-7 items-center justify-center rounded-md",
                  "border-2 border-violet-600 shadow shadow-violet-400",
                  pathname === "/" && "bg-violet-600 text-white",
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
        <DesktopNav navigation={NavHeader} />
        <Separator orientation="vertical" className="mr-1 hidden h-8 bg-gray-400 md:flex" />
        <ThemeSwitcher />
        <MobileNav navigation={NavHeader} />
      </nav>
    </header>
  );
}
