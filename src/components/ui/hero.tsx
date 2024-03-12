"use client";
import { cn } from "@/lib/utils";
import React from "react";

const Hero = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section ref={ref} className={cn("m-auto md:mx-auto", className)} {...props} />
  ),
);
Hero.displayName = "Hero";
export default Hero;
