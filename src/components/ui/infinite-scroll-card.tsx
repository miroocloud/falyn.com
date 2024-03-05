"use client";
import Marquee from "react-fast-marquee";

type Marquee = {
  children: React.ReactNode;
};

export function InfiniteScrollCard({ children, ...props }: Marquee) {
  return (
    <Marquee {...props}>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </Marquee>
  );
}
