import Container from "@/components/common/Container";
import ExperienceSection from "@/components/home/experience/experience-section";
import Feedback from "@/components/home/feedback";
import GithubActivity from "@/components/home/github-section";
import HeroSection from "@/components/home/hero-section";
import ProjectSection from "@/components/home/project/project-section";
import SkillSection from "@/components/home/skills-section";

const page = () => {
  return (
    <Container>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <Feedback />
      <SkillSection />
      <GithubActivity />
    </Container>
  );
};

export default page;
