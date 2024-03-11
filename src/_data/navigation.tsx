import { NavigationProps } from "@/types/data";

export const Navigation = [
  {
    name: "Projects",
    href: "/projects",
    show: "header",
  },
  {
    name: "Contact",
    href: "/contact",
    show: "header",
  },
  {
    name: "Status",
    href: "https://status.tunadev.com/",
    show: "footer",
    anchor: {
      newWindow: true,
    },
  },
  {
    name: "Domain List",
    href: "#",
    show: "footer",
  },
] satisfies NavigationProps[];

export const NavHeader = Navigation.filter(
  (i: NavigationProps) => i.show === "all" || i.show === "header"
);
export const NavFooter = Navigation.filter(
  (i: NavigationProps) => i.show === "all" || i.show === "footer"
);
