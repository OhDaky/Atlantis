import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(1);

  const listener = e => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY
  };
}