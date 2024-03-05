"use client";
import { NavHeader, NavFooter, Navigation } from "@/_data/navigation";
import Anchor from "@ui/anchor";
import { Separator } from "@ui/separator";

export default function Footer() {
  return (
    <footer className="relative mx-auto mt-14 max-w-5xl px-4 pb-6">
      <Separator className="m-auto max-w-5xl bg-gray-400/90 dark:bg-gray-600" />
      <div className="mx-auto max-w-sm space-y-6 text-sm sm:max-w-7xl sm:text-center">
        <div className="pt-6">
          <ul className="grid grid-cols-2 justify-center gap-4 font-mono sm:flex sm:gap-10">
            {Navigation.map((nav, i) => (
              <li key={i}>
                <Anchor
                  href={nav.href}
                  newWindow={nav.anchor?.newWindow}
                  className="border-b border-transparent hover:border-gray-700 dark:hover:border-gray-500">
                  {nav.name}
                </Anchor>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex justify-center text-center">
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
      </div> */}

        <div className="mt-20 flex flex-col items-center text-sm md:flex-row md:justify-between">
          <div className="space-y-2 text-start text-xs font-medium opacity-70 max-[430px]:order-2">
            <div>Not regarding anything when looking back, let us live the day.</div>
            <div>
              &copy; {new Date().getFullYear()}{" "}
              <Anchor className="hover:underline"> Farid Nizam</Anchor>. All Rights Reserved.
            </div>
          </div>
          {/* <div>SIN | 12 ms</div> */}
        </div>
      </div>
    </footer>
  );
}
