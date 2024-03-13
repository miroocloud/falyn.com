import type { ChildrenProps } from "@/types/default";
import { DiscordStatusMask } from "@/components/svg/discord";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";

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
