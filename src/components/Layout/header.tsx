"use client";
import Anchor from "@achor";
import { Separator } from "@components/ui/separator";
import ThemeSwitcher from "./theme-switch";
import MenuNav from "./menu-nav";
import MobileNav from "./mobile-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import MenuNavigation from "~data/menu";

export default function Header() {
  return (
    <>
      <header className="base-header">
        <Anchor
          aria-label="Homepage"
          className="flex justify-center items-center gap-x-2 select-none"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars-githubusercontent.webp.se/u/29797712"
              alt="Farid's Logo"
            />
            <AvatarFallback>FN</AvatarFallback>
          </Avatar>
          <div className="flex tracking-tigh leading-none font-bold text-black/90 dark:text-white/90">
            Fayln
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
