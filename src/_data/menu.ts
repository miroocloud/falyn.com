// eslint-disable-next-line import/no-anonymous-default-export
import type { MenuNavigationProps } from "~types/data";
export default [
  {
    name: "Projects",
    href: "/projects",
    showNavbar: true,
    showFooter: true,
  },
  {
    name: "Contact",
    href: "/contact",
    showNavbar: true,
    showFooter: true,
  },
  {
    name: "Domain list",
    href: "/domains",
    showFooter: true,
  },
  {
    name: "Status",
    href: "https://status.fayln.com/",
    showFooter: true,
    openWindows: true,
  },
] satisfies MenuNavigationProps[];
