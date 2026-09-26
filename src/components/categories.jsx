import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
};

const categories = [
  {
    id: "ameublement",
    title: "Ameublement",
    image: "/Lines/ameublement/ameublement.png",
    number: "01",
  },
  {
    id: "tissus-automobiles",
    title: "Automobiles",
    image: "/Lines/automobile/automobiles.png",
    number: "02",
  },
  {
    id: "matiere-chaussure",
    title: "Chaussure",
    image: "/Lines/chaussure/chaussure.png",
    number: "03",
  },
  {
    id: "autres-textiles",
    title: "Textiles",
    image: "/Lines/textile/textiles.png",
    number: "04",
  },
];

export default function CategoriesSection() {
  return (
    <section className="pt-20 md:pt-10 pb-6" style={{ backgroundColor: COLORS.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .cat-font-display { font-family: 'Fraunces', serif; }
        .cat-font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="mx-auto px-6 sm:px-10 md:px-14">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <h2
            className="cat-font-display font-light mb-4"
            style={{ color: COLORS.navy, fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Nos Catégories
          </h2>
          <p
            className="cat-font-body max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(31,42,68,0.6)" }}
          >
            Découvrez notre gamme complète de produits textiles pour tous vos besoins industriels.
          </p>
        </div>
      </div>

      {/* Edge-to-edge category grid — reads like a board of fabric swatches */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="group relative block h-[26rem] md:h-[30rem] overflow-hidden"
            style={{ backgroundColor: COLORS.navyDeep }}
          >
            {/* Image — slightly muted at rest, comes to full color on hover */}
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover saturate-[.85] group-hover:saturate-100 group-hover:scale-105 transition-all duration-500 ease-out"
            />

            {/* Overlay — navy scrim, deepens on hover */}
            <div
              className="absolute inset-0 transition-colors duration-500"
              style={{
                background:
                  "linear-gradient(0deg, rgba(20,26,44,0.75) 0%, rgba(20,26,44,0.25) 45%, rgba(20,26,44,0.05) 70%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundColor: "rgba(20,26,44,0.35)" }}
            />

            {/* Number — top left */}
            {/* <div className="absolute top-7 left-7">
              <span
                className="cat-font-display italic text-2xl tracking-wide transition-colors duration-300"
                style={{ color: "rgba(247,243,236,0.75)" }}
              >
                {category.number}.
              </span>
            </div> */}

            {/* Title + divider + arrow — bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-7 py-7">
              <h3
                className="cat-font-display font-medium text-2xl mb-3 transition-colors duration-300"
                style={{ color: COLORS.cream }}
              >
                {category.title}
              </h3>
              <div className="flex items-center justify-between">
                <div
                  className="h-px transition-all duration-300 group-hover:w-16"
                  style={{ width: "2.5rem", backgroundColor: COLORS.gold }}
                />
                <ArrowRight
                  className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: COLORS.gold }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
