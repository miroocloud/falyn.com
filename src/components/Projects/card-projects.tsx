"use client";
import { ChildrenProps } from "~types/default";
import { MotionDiv } from "@components/Motion";
import { cn } from "@utils";
import { Card as CardMain } from "@components/ui/card";
import { BadgeFeatured, BadgeNew } from "./badge-projects";

interface Card extends ChildrenProps {
  className?: string;
  badge?: "new" | "featured";
}

export default function Card({ children, className = "", badge }: Card) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <CardMain
        className={cn(
          "group relative lg:hover:shadow-md",
          "transition-all duration-300 lg:hover:scale-[102%]",
          "bg-secondary/50",
          className,
        )}
      >
        {(badge == "new" && <BadgeNew />) ||
          (badge == "featured" && <BadgeFeatured />)}

        {children}
      </CardMain>
    </MotionDiv>
  );
}
