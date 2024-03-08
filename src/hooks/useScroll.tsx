import { useState, useEffect } from "react";

export default function useScroll(): string {
  const [scrollDirection, setScrollDirection] = useState<
    "Up" | "Down" | "Not Moved"
  >("Not Moved");

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setScrollDirection("Down");
    } else if (window.scrollY < 10) {
      setScrollDirection("Up");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollDirection]);

  return scrollDirection;
}
