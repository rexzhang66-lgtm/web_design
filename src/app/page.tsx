import { Hero } from "@/components/site/hero";
import { Work } from "@/components/site/work";
import { Pricing } from "@/components/site/pricing";
import { Contact } from "@/components/site/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Pricing />
      <Contact />
    </>
  );
}
