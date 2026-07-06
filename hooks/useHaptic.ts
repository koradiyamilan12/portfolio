"use client";
import { useEffect } from "react";

import { haptic } from "@/lib/haptic";

export const useHaptic = () => {
  useEffect(() => {
    const clickSound = new Audio("/sound/click.mp3");
    clickSound.volume = 0.1;
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'button, a, [role="button"]',
      );

      if (target) {
        haptic(7);

        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);
};
