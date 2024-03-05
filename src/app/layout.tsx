import "./globals.css";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@lib/providers";
import { CloudflareAnalytics } from "@components/analytics";
import { Toaster } from "@ui/sonner";

import Header from "@components/layout/header";
import Footer from "@components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production" ? "https://fayln.com" : "http://localhost:3000"
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/latin.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/index.min.css"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          enableSystem={false}>
          <NextTopLoader color="#eb2754" showSpinner={false} />
          <Header />
          <main className="layout">{children}</main>
          <Footer />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
