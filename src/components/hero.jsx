import Image from "next/image";
import Link from "next/link";
// import africaHero from "/africaHero.png";

export default function Hero() {

  const categories = [
    {
      id: "matiere-chaussure",
      title: "Matière Chaussure",
      image: "/chaussure.png",
    },
    {
      id: "ameublement",
      title: "Ameublement",
      image: "/ameublement.png",
    },

    {
      id: "tissus-automobiles",
      title: "Tissus automobiles",
      image: "/automobile.png",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:py-24 bg-cover bg-center bg-fixed "
      style={{
        backgroundImage: `url(/africaHero.png)`,
      }}
    >
      <div className="absolute inset-0 bg-black/15" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-slate-50 to-slate-300 font-bold p-4 mb-4 mt-3 leading-tight text-center text-balance">
          Africa Trade & Industry vous accompagne vers l’excellence
          industrielle.
        </h1>

        {/* Subheading */}
        <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto text-center">
          Avec plus de 20 années d’expérience dans l’import-export et la
          distribution de matières textile
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group cursor-pointer"
            >
              <div className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow h-64">
                {/* Category Image */}
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Title - Positioned at bottom center */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 px-4 py-3">
                  <h3 className="text-sm font-semibold text-white text-center group-hover:text-blue-300 transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
