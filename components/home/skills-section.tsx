import { skillsIcon } from "@/components/ui/skills-icon";
import { skills } from "@/data/skills";

import { Separator } from "../ui/separator";

const SkillSection = () => {
  return (
    <div id="skills" className="mx-auto mt-8 max-w-3xl px-4">
      <Separator className="mb-6" />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-hankenGrotesk text-3xl font-bold">Stack</h1>
      </div>

      {/* Skills */}
      <div>{skillsIcon(skills)}</div>
    </div>
  );
};

export default SkillSection;
