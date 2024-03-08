"use client";
import { cn } from "@utils";
import React from "react";

const Hero = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("m-auto md:mx-auto md:max-w-4xl", className)}
      {...props}
    />
  )
);
Hero.displayName = "Hero";
export default Hero;
