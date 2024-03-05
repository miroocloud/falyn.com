export const siteConfig = {
  name: "Farid Nizam",
  url: new URL(
    process.env.NODE_ENV === "production" ? "https://fayln.com" : "http://localhost:3000"
  ),
  description:
    "Hey, I am Farid Nizam. A Network Engineering also a Pull-stack Developer (pull everything from the internet).",
  ogDescription: "A Network Engineering also a Pull-stack Developer.",
};

export type SiteConfig = typeof siteConfig;
