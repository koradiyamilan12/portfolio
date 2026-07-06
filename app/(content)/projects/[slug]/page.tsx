import { Metadata } from "next";

import Container from "@/components/common/Container";
import ProjectDetails from "@/components/content/projects/project-details";
import { projectsCardInfo } from "@/data/projects-cards-info";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsCardInfo.find((p) => p.name === slug);

  return {
    title: project
      ? `${project.name[0].toUpperCase() + project.name.slice(1)} - Project Overview`
      : "Project - Overview",
  };
}

export const generateStaticParams = () => {
  return projectsCardInfo.map((project) => ({ slug: project.name }));
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const data = (await params).slug;

  return (
    <Container>
      <ProjectDetails slug={data} />
    </Container>
  );
};

export default page;
