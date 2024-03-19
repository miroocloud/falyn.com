import "./globals.css";
import type { Metadata } from "next";
import type { ChildrenProps } from "@/types/default";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/lib/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production" ? "https://fayln.com" : "http://localhost:3000",
  ),
  title: {
    template: "%s | Farid Nizam",
    default: "Farid Nizam",
  },
  description:
    "Hey, I am Farid Nizam. A Network Engineering also a Pull-stack Developer (pull everything from the internet).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Farid Nizam",
    description: "A Network Engineering also a Pull-stack Developer.",
    siteName: "Farid Nizam",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Farid Nizam",
    description: "A Network Engineering also a Pull-stack Developer.",
    site: "@faridhnzz",
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="naver-site-verification" content="df121aab64c02cdf537a2e004e65b016ea85c1d4" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/latin.min.css"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          enableSystem={false}>
          <NextTopLoader color="#e11d48" showSpinner={false} />
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
