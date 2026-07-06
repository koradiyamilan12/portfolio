import { Metadata } from "next";

import Container from "@/components/common/Container";
import ContactForm from "@/components/content/contact-form";

export const metadata: Metadata = {
  title: "Contact - Get in touch",
};

const page = () => {
  return (
    <Container>
      <ContactForm />
    </Container>
  );
};

export default page;
