"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();
  const [rotated, setRotated] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setRotated(true);
    setTimeout(() => setRotated(false), 300); // Reset rotation state after the animation
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      onClick={handleClick}
      className="transition-transform duration-300 ease-in-out"
    >
      {theme === "dark" ? (
        <Moon
          className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 ease-in-out transform ${
            rotated ? "-rotate-180" : ""
          }`}
        />
      ) : (
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 ease-in-out transform ${
            rotated ? "rotate-180" : ""
          }`}
        />
      )}
    </Button>
  );
}
