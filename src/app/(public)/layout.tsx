import type { ChildrenProps } from "~types/default";
import Image from "next/image";

import { Toaster } from "@components/ui/toaster";
import Header from "@components/Layout/header";
import Footer from "@components/Layout/footer";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      <main className="container relative flex-grow overflow-hidden">
        {children}
      </main>
      <Footer />
      <Toaster />
      <Image
        width={1512}
        height={550}
        className="hidden md:flex absolute left-1/2 -top-[16px] -z-10 -translate-x-1/2"
        src="/img/gradient-background-top.png"
        alt="Gradient background"
        priority
      />
    </>
  );
}
