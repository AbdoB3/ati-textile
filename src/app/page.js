import Hero from "@/components/hero";
import { Feature } from "@/components/ui/feature-with-image";
import Stats from "@/components/stats";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-10 md:mx-20">
        <Feature />
      </div>

      <Stats/>
    </main>
  );
}
