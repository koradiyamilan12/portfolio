import Image from "next/image";
import Link from "next/link";

import { getSkillIconInfo } from "@/data/skills-icon-info";

const TechBadge = ({ tech }: { tech: string }) => {
  const techInfo = getSkillIconInfo(tech);
  const label = techInfo?.label ?? tech;
  const link = techInfo?.link ?? "#";
  const isExternalLink = Boolean(techInfo?.link);

  return (
    <Link
      href={link}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      target={isExternalLink ? "_blank" : undefined}
      className="text-foreground inline-flex items-center gap-1.5 rounded-md border border-dashed border-zinc-300/90 bg-zinc-100/80 px-2.5 py-1 text-sm font-medium backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/90"
    >
      {techInfo?.image ? (
        <Image
          src={techInfo.image}
          alt={label}
          width={14}
          height={14}
          className="object-contain"
        />
      ) : (
        techInfo?.icon && <techInfo.icon style={{ color: techInfo.color }} />
      )}
      {label}
    </Link>
  );
};

export default TechBadge;
