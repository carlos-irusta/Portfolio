import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Currently } from "@/components/currently";
import { ComingSoon } from "@/components/coming-soon";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <Projects />
        <Stack />
        <Currently />
        <ComingSoon />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
