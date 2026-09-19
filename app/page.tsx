import { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  // Using the default title and description from layout.tsx
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}
