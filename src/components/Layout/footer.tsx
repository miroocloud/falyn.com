"use client";
import MenuNavigation from "~data/menu";

export default function Footer() {
  return (
    <>
      <footer className="mx-auto flex max-w-7xl flex-col px-8 pb-8">
        {/* <div className="mt-12 grid grid-cols-2 sm:grid-cols-3"></div> */}

        <div className="mt-20 flex items-center justify-between text-sm">
          <div>&copy; {new Date().getFullYear()} Farid Nizam</div>
        </div>
      </footer>
    </>
  );
}
