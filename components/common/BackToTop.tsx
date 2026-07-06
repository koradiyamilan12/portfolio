"use client";
import { useEffect } from "react";

import { usePathname } from "next/navigation";

const BackToTop = () => {
  const pathName = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathName]);
  return null;
};

export default BackToTop;
