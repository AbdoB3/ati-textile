import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function CategoriesSection() {
  const categories = [
    {
      id: "ameublement",
      title: "Ameublement",
      image: "/ameublement4.png",
      number: "01",
    },
    {
      id: "tissus-automobiles",
      title: "Automobiles",
      image: "/automobile2.png",
      number: "02",
    },
    {
      id: "matiere-chaussure",
      title: "Chaussure",
      image: "/chaussure.png",
      number: "03",
    },
    {
      id: "autres-textiles",
      title: "Textiles",
      image: "/textile.png",
      number: "04",
    },
  ];

  return (
    <section className="pt-16  md:py-12 bg-gray-50">
      <div className="mx-auto">
        {/* Optional: Add a section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Catégories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits textiles pour tous vos
            besoins industriels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[30rem] bg-white">
                {/* Category image */}
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />

                {/* Number - Top Left */}
                <div className="absolute top-7 left-7">
                  <span className="text-2xl  md:text-2xl  text-white tracking-wider">
                    {category.number}.
                  </span>
                </div>

                {/* Title with divider - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="w-16 h-px bg-white group-hover:bg-blue-300 group-hover:w-24 transition-all duration-300"></div>

                  {/* ChevronRight - Bottom Right on hover */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}