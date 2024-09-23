import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DreamRP",
  description:
    "The Next Generation of. Interactive Storytelling. Engage with your fans by letting them chat directly with your characters.",
};

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
