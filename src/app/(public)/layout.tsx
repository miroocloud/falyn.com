import type { ChildrenProps } from "@/types/default";
import { DiscordStatusMask } from "@components/svg/discord";

import Header from "@components/layout/header";
import Footer from "@components/layout/footer";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <>
      <DiscordStatusMask />
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}
