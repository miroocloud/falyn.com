import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const switchTheme = () =>
    setTheme(resolvedTheme === "light" ? "dark" : "light");

  return (
    <>
      <Button
        aria-label="BUtton Dark Mode"
        variant="default"
        type="button"
        size="icon"
        onClick={switchTheme}
        className="h-9 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-yellow-600 bg-yellow-500 focus:outline-none"
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    </>
  );
}
