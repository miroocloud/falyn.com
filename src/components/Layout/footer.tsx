"use client";
import Anchor from "@achor";
import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import { IconCircleCheckFilled } from "@tabler/icons-react";

import MenuNavigation from "~data/menu";

export default function Footer() {
  return (
    <>
      <footer className="max-w-5xl mx-auto relative pb-6 mt-14 px-4">
        <Separator className="max-w-5xl m-auto dark:bg-gray-600 bg-gray-400/90" />
        <div className="sm:text-center max-w-sm sm:max-w-7xl mx-auto space-y-6 text-sm">
          <div className="pt-6">
            <ul className="grid grid-cols-2 sm:flex justify-center font-mono gap-4 sm:gap-10">
              {MenuNavigation.map((item, i) => (
                <li key={i}>
                  <Anchor
                    href={item.href}
                    newWindow={item.openWindows}
                    aria-label={item.name}
                    className="border-b border-transparent hover:border-gray-700 dark:hover:border-gray-500"
                  >
                    {item.name}
                  </Anchor>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center text-center">
            <Badge variant="secondary" className="cursor-default">
              <div className="h-[18px] inline-block leading-none mr-2 text-center w-[18px]">
                <IconCircleCheckFilled
                  width={18}
                  height={18}
                  className="inline-block text-green-500"
                />
              </div>
              <div className="dark:text-white font-medium text-[14px] text-neutral-600 whitespace-nowrap">
                All services are online
              </div>
            </Badge>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center md:justify-between text-sm">
            <div>&copy; {new Date().getFullYear()} Farid Nizam</div>
            <div>SIN | 12 ms</div>
          </div>
        </div>
      </footer>
    </>
  );
}
