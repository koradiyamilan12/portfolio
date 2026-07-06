import { Metadata } from "next";

import Container from "@/components/common/Container";
import ResumeSection from "@/components/content/resume-section";

export const metadata: Metadata = {
  title: "Resume - Milan Koradiya",
};

const page = () => {
  return (
    <Container>
      <ResumeSection />
    </Container>
  );
};

export default page;
