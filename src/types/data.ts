import type { StaticImageData } from "next/image";

interface Base {
  name: string;
  href: string;
}

interface Icon {
  icon?: JSX.Element;
}

interface Anchor {
  anchor?: {
    newWindow: boolean;
    rel?: "nofollow" | "author" | "me" | "sponsored" | "ugc";
  };
}

// Sosial (FindMeSosial)
export type SosialProps = Base & Icon & Anchor;
// Sosial (ContactInfomation)
export type ContactProps = { value: string } & Base & Icon & Anchor;

// Navigation
interface Navigation {
  show: "all" | "footer" | "header";
  type?: string;
}

export type NavigationProps = Base & Anchor & Navigation;

// Project
interface Project extends Anchor {
  id: number;
  name: string;
  desc: string;
  category: string;
  homepage?: string;
  thumbnail?: string;
  repositories?: string;
  featured?: boolean;
  new?: boolean;
  color?: {
    bg?: string;
    mask?: string;
  };
  stack?: ProjectStack[];
}

interface ProjectStack {
  name: string;
}

export type ProjectProps = Project;

// Tech Stacks
export type StacksProps = {
  id: number;
  name: string;
  images?: StaticImageData;
  color?: {
    bg: string;
    text: string;
  };
} & Icon;
