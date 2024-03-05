import { StacksProps } from "@/types/data";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
} from "@tabler/icons-react";
import {
  IconBrandCloudflare,
  IconBrandVercel,
  IconBrandDocker,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandGit,
  IconBrandNotion,
  IconBrandPnpm,
  IconBrandPowershell,
} from "@tabler/icons-react";

const size: number = 34;
export const TectStacks = [
  {
    id: 1,
    name: "HTML",
    icon: <IconBrandHtml5 size={size} />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <IconBrandCss3 size={size} />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <IconBrandJavascript size={size} />,
  },
  {
    id: 4,
    name: "Typescript",
    icon: <IconBrandTypescript size={size} />,
  },
  {
    id: 5,
    name: "NextJS",
    icon: <IconBrandNextjs size={size} />,
  },
  {
    id: 6,
    name: "React",
    icon: <IconBrandReact size={size} />,
  },
  {
    id: 7,
    name: "NodeJS",
    icon: <IconBrandNodejs size={size} />,
  },
  {
    id: 8,
    name: "TailwindCSS",
    icon: <IconBrandTailwind size={size} />,
  },
] satisfies StacksProps[];

export const Stacks = [
  {
    id: 1,
    name: "Cloudflare",
    icon: <IconBrandCloudflare size={size} />,
  },
  {
    id: 2,
    name: "Vercel",
    icon: <IconBrandVercel size={size} />,
  },
  {
    id: 3,
    name: "Docker",
    icon: <IconBrandDocker size={size} />,
  },
  {
    id: 4,
    name: "Github",
    icon: <IconBrandGithub size={size} />,
  },
  {
    id: 5,
    name: "Git",
    icon: <IconBrandGit size={size} />,
  },
  {
    id: 6,
    name: "PNPM",
    icon: <IconBrandPnpm size={size} />,
  },
  {
    id: 7,
    name: "Discord",
    icon: <IconBrandDiscord size={size} />,
  },
  {
    id: 8,
    name: "Notion",
    icon: <IconBrandNotion size={size} />,
  },
] satisfies StacksProps[];
