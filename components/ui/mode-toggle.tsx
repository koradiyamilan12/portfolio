"use client";

import { useCallback, useEffect } from "react";
import { ImSun } from "react-icons/im";
import { RxMoon } from "react-icons/rx";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleMode = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        handleMode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleMode]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            type="button"
            size="icon"
            className="group hover:bg-accent/50 size-9 cursor-pointer rounded-full hover:shadow-none"
            onClick={handleMode}
          >
            <ImSun className="text-muted-foreground group-hover:text-primary hidden size-4 transition-colors dark:block" />
            <RxMoon className="text-muted-foreground group-hover:text-primary size-4 transition-colors dark:hidden" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="py-2">
          Toggle Mode{" "}
          <span className="bg-background/20 rounded px-1.5 py-0.5 text-[12px] font-medium">
            Ctrl
          </span>{" "}
          <span className="bg-background/20 rounded px-1.5 py-0.5 text-[12px] font-medium">
            D
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
