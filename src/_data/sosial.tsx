// eslint-disable-next-line import/no-anonymous-default-export
import type { SosialProps } from "~types/data";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
const size: number = 28;
export default [
  {
    name: "GitHub",
    href: "https://go.fayln.com/github",
    icon: <IconBrandGithub size={size} />,
  },
  {
    name: "X",
    href: "https://go.fayln.com/twitter",
    icon: <IconBrandX size={size} />,
  },
  {
    name: "Instagram",
    href: "https://go.fayln.com/instagram",
    icon: <IconBrandInstagram size={size} />,
  },
  {
    name: "Linkedin",
    href: "https://go.fayln.com/linkedin",
    icon: <IconBrandLinkedin size={size} />,
  },
] satisfies SosialProps[];
