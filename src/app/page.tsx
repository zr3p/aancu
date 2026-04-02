import { HeroEnhanced } from "@/components/HeroEnhanced";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroEnhanced />
      <Services />
      <About />
      <Contact />
    </>
  );
}
