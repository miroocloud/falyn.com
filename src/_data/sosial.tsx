import type { SosialProps, ContactProps } from "@/types/data";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSteam,
  IconMail,
} from "@tabler/icons-react";
const size: number = 28;

// Find Me On
export const FindMeSosial = [
  {
    name: "GitHub",
    href: "https://go.fayln.com/github",
    icon: <IconBrandGithub size={size} />,
    anchor: {
      newWindow: true,
      rel: "nofollow",
    },
  },
  {
    name: "X (Twitter)",
    href: "https://go.fayln.com/twitter",
    icon: <IconBrandX size={size} />,
    anchor: {
      newWindow: true,
      rel: "nofollow",
    },
  },
  // {
  //   name: "Instagram",
  //   href: "https://go.fayln.com/instagram",
  //   icon: <IconBrandInstagram size={size} />,
  //   anchor: {
  //     newWindow: true,
  //     rel: "nofollow",
  //   },
  // },
  {
    name: "Linkedin",
    href: "https://go.fayln.com/linkedin",
    icon: <IconBrandLinkedin size={size} />,
    anchor: {
      newWindow: true,
      rel: "nofollow",
    },
  },
  {
    name: "Steam",
    href: "https://go.fayln.com/steam",
    icon: <IconBrandSteam size={size} />,
    anchor: {
      newWindow: true,
      rel: "nofollow",
    },
  },
] satisfies SosialProps[];

// Contact
export const ContactInfomation = [
  {
    name: "Email",
    value: "farid@fayln.com",
    href: "mailto:farid@fayln.com",
    icon: <IconMail size={size} />,
    anchor: {
      newWindow: true,
      rel: "nofollow",
    },
  },
  {
    name: "Linkedin",
    value: "faridhnzz",
    href: "https://go.fayln.com/linkedin",
    icon: <IconBrandLinkedin size={size} />,
    anchor: {
      newWindow: true,
      rel: "nofollow",
    },
  },
] satisfies ContactProps[];
