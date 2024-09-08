"use client";

import * as React from "react";
import { Code, Command, Github, Link, Linkedin } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";

export function MyCommandDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        aria-label="Open command dialog"
        size="icon"
        onClick={() => setOpen((open) => !open)}
      >
        <Command className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="General">
            <CommandItem onSelect={handleCopyLink}>
              <Link className="mr-2 h-4 w-4" />
              <span>Copy link</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open(
                  "https://github.com/invictusaman/my-personal-portfolio",
                  "_ blank"
                )
              }
            >
              <Code className="mr-2 h-4 w-4" />
              <span>Source code</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
            <CommandItem
              onSelect={() =>
                window.open("https://github.com/invictusaman", "_ blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Github</span>
            </CommandItem>
            <CommandItem
              onSelect={() => window.open("https://www.kaggle.com/amanbhattarai695", "_ blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3" fill="none" stroke="currentColor" strokeWidth="5px" viewBox="0 0 32 32"><defs><clipPath id="A"><use xlinkHref="#B"/></clipPath><path id="B" d="M31.5 15.978h289v130.044h-289z"/></defs><path transform="matrix(.527027 0 0 .527027 -30.632288 -22.45559)" clip-path="url(#A)" d="M105.75 102.968c-.06.238-.298.357-.713.357H97.1c-.477 0-.89-.208-1.248-.625L82.746 86.028l-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892V43.5c0-.593.297-.89.892-.89H78.2c.594 0 .892.298.892.89v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.09.624-.09.803L88.274 80.588l17.297 21.488c.237.238.297.535.18.892" className="mr-2 h-4 w-4"/></svg>
              <span>Kaggle</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open(
                  "https://www.linkedin.com/in/amanbhattarai/",
                  "_ blank"
                )
              }
            >
              <Linkedin className="mr-2 h-4 w-4" />
              <span>Linkedin</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
