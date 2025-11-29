import Categories from "@/components/categories";
import { Feature } from "@/components/ui/feature-with-image";
import Stats from "@/components/stats";
import HeroCarousel from "@/components/hero2";
export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <Categories/>
      <div className="mx-10 md:mx-20">
        <Feature />
      </div>

      <Stats/>
    </main>
  );
}
