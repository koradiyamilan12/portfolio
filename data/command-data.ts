import { Briefcase, Home, type LucideIcon, Mail, User } from "lucide-react";

type CommandData = {
  heading: string;
  items: { icon: LucideIcon; label: string; path: string }[];
};

export const COMMAND_DATA: CommandData[] = [
  {
    heading: "Main",
    items: [
      { icon: Home, label: "Home", path: "/" },
      { icon: Briefcase, label: "Work", path: "/work" },
    ],
  },
  {
    heading: "Connect",
    items: [
      { icon: User, label: "Resume", path: "/resume" },
      { icon: Mail, label: "Contact", path: "/contact" },
    ],
  },
];
