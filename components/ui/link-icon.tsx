"use client";

import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const LinksIcon = () => {
  const LinksInfo = [
    {
      icon: FaGithub,
      link: "https://github.com/Kunal-Kumar-Soni",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/kunal-kumar-soni",
      label: "LinkedIn",
    },
    { icon: BsTwitterX, link: "https://x.com/KunalKumar_Soni", label: "X" },
    { icon: IoMail, link: "mailto:kunalcodes24@gmail.com", label: "Email" },
  ];

  return (
    <TooltipProvider>
      <div className="flex gap-3">
        {LinksInfo.map((linkInfo) => {
          const { icon: Icon, label, link } = linkInfo;

          return (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-muted-foreground hover:text-foreground flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Icon
                    size={20}
                    className="transition-transform duration-200 group-hover:rotate-6"
                  />
                </Link>
              </TooltipTrigger>

              <TooltipContent>
                <p className="text-xs">{label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
