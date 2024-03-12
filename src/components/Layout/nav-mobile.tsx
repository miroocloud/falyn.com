"use client";
import Anchor from "@/components/ui/anchor";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Key } from "react";
import type { NavigationProps } from "@/types/data";

export default function MobileNav({ navigation }: { navigation: NavigationProps[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          className="flex h-9 w-9 items-center justify-center p-0 dark:bg-gray-700 md:hidden"
          aria-label="Toggle menu"
          variant="outline">
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navigation.map((item: NavigationProps, i: Key) => {
          return (
            <DropdownMenuItem key={i} asChild>
              <Anchor
                href={item.href}
                aria-label={item.name}
                newWindow={item.anchor?.newWindow}
                rel={item.anchor?.rel}>
                {item.name}
              </Anchor>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
