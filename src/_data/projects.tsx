import { ProjectProps } from "@/types/data";
export const Project = [
  {
    id: 1,
    name: "Fontlay",
    desc: "A simple Google Fonts proxy. Prevent from being tracked and privacy-friendly.",
    category: "Web Development",
    homepage: "https://fontlay.com",
    repositories: "https://go.fayln.com/github/fontlay",
    featured: true,
    new: true,
    stack: [{ name: "React" }, { name: "NextJS" }, { name: "TailwindCSS" }],
  },
  {
    id: 2,
    name: "Domin",
    desc: "A search for domain name availability before buy domain.",
    category: "Web Development",
    homepage: "https://cekdomain.js.org/",
    repositories: "https://go.fayln.com/github/domin",
    featured: true,
    new: false,
    stack: [{ name: "HMTL" }, { name: "Javascript" }, { name: "CSS" }],
  },
] satisfies ProjectProps[];
