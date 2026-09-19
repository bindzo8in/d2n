import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with D2N Digital Marketing. We're ready to help you scale your business in Coimbatore.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
