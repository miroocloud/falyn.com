"use client";
import Anchor from "@anchor";
import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import { IconCircleCheckFilled } from "@tabler/icons-react";

import { NavFooter } from "@/_data/navigation";

export default function Footer() {
  return (
    <>
      <footer className="relative mx-auto mt-14 max-w-5xl px-4 pb-6">
        <Separator className="m-auto max-w-5xl bg-gray-400/90 dark:bg-gray-600" />
        <div className="mx-auto max-w-sm space-y-6 text-sm sm:max-w-7xl sm:text-center">
          <div className="pt-6">
            <ul className="grid grid-cols-2 justify-center gap-4 font-mono sm:flex sm:gap-10">
              {NavFooter.map((item, i) => (
                <li key={i}>
                  <Anchor
                    href={item.href}
                    aria-label={item.name}
                    newWindow={item.anchor?.newWindow}
                    className="border-b border-transparent hover:border-gray-700 hover:font-semibold dark:hover:border-gray-500">
                    {item.name}
                  </Anchor>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center text-center">
            <Badge variant="secondary" className="cursor-default">
              <div className="mr-2 inline-block h-[18px] w-[18px] text-center leading-none">
                <IconCircleCheckFilled
                  width={18}
                  height={18}
                  className="inline-block text-green-500"
                />
              </div>
              <div className="whitespace-nowrap text-[14px] font-medium text-neutral-600 dark:text-white">
                All services are online
              </div>
            </Badge>
          </div>

          <div className="mt-20 flex flex-col items-center text-sm md:flex-row md:justify-between">
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Anchor className="hover:text-black hover:underline hover:dark:text-white">
                {" "}
                Farid Nizam
              </Anchor>
              . All Rights Reserved.
            </div>
            {/* <div>SIN | 12 ms</div>  */}
          </div>
        </div>
      </footer>
    </>
  );
}
