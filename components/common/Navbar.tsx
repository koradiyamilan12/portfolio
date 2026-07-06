"use client";
import Link from "next/link";

import { ModeToggle } from "../ui/mode-toggle";
import { CommandCenter } from "./CommnadCenter";

const DATA = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
];

const Navbar = () => {
  return (
    <nav className="bg-background/80 border-border sticky top-0 z-50 w-full border-b backdrop-blur-lg">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-semibold sm:gap-8">
          {DATA.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group text-muted-foreground hover:text-foreground relative transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <CommandCenter />

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
