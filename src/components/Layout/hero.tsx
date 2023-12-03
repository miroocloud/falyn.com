"use client";
import { cn } from "@utils";
import React from "react";

// export function Heroo({ className, ...props }) {
//   return (
//     <section
//       className={cn("m-auto md:mx-auto md:max-w-6xl", className)}
//       {...props}
//     ></section>
//   );
// }

const Hero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("m-auto md:mx-auto md:max-w-6xl", className)}
    {...props}
  />
));
Hero.displayName = "Hero";
export default Hero;
