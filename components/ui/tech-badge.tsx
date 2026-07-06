import Image from "next/image";
import Link from "next/link";

import { skillsIconInfo } from "@/data/skills-icon-info";

const TechBadge = ({ tech }: { tech: string }) => {
  const techInfo = skillsIconInfo.find((icon) => icon.name === tech);

  if (!techInfo) return null;
  const { label, link, color, icon: Icon, image, name } = techInfo;

  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="text-foreground inline-flex items-center gap-1.5 rounded-md border border-dashed border-zinc-300/90 bg-zinc-100/80 px-2.5 py-1 text-sm font-medium backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/90"
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          width={14}
          height={14}
          className="object-contain"
        />
      ) : (
        Icon && <Icon style={{ color }} />
      )}
      {label}
    </Link>
  );
};

export default TechBadge;
