"use client";
import Anchor from "@achor";
import { Menu } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Key } from "react";

type Items = {
  href: string;
  openWindows: boolean;
  name: string;
};

export default function MobileNav({ data }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          className="flex h-9 w-9 items-center justify-center p-0 md:hidden dark:bg-gray-700"
          aria-label="Toggle menu"
          variant="outline"
        >
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.map((items: Items, i: Key) => {
          return (
            <DropdownMenuItem key={i} asChild>
              <Anchor href={items.href} newWindow={items.openWindows}>
                {items.name}
              </Anchor>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
