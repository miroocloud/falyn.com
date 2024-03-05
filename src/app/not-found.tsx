import type { Metadata } from "next";
export const runtime = "edge";

export const metadata: Metadata = {
  title: "404: This page could not be found.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[60vh] flex-col items-center justify-center space-y-2 overflow-hidden md:h-[68vh]">
      <div className="mb-6 space-y-4 text-center">
        <h1 className="select-none text-9xl font-black">404</h1>
        <p className="text-sm md:text-lg">Seems like you found a page that doesn't exist!</p>
      </div>
    </div>
  );
}
