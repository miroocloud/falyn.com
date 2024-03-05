"use client";
import { cn } from "@utils";
import React from "react";

const Hero = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("m-auto mx-auto md:max-w-4xl lg:max-w-5xl", className)}
      {...props}
    />
  )
);
Hero.displayName = "Hero";
export default Hero;
