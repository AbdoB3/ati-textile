import Image from "next/image";
import Link from "next/link";
// import africaHero from "/africaHero.png";

export default function Hero() {
  const categories = [
    {
      id: "matiere-chaussure",
      title: "Chaussure",
      image:
        "/chaussure.png",
    },
    {
      id: "ameublement",
      title: "Ameublement",
      image:
        "/ameublement4.png",
    },

    {
      id: "tissus-automobiles",
      title: "Automobiles",
      image:
        "/automobile2.png",
    },
    {
      id: "textiles",
      title: "Textiles",
      image:
        "textile.png",
    },
  ];

  return (
    <section
      className="py-24 px-4 relative md:py-40 bg-cover bg-center bg-fixed "
      style={{
        backgroundImage: `url(/africaHero3.png)`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className=" max-w-[100rem] mx-auto relative z-10">
        <div className="max-w-[120rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group cursor-pointer"
              >
                <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-[30rem]">
                  {/* Tall category image */}
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Title - bottom center with refined styling */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                    <h3 className="text-lg font-semibold text-white  group-hover:text-blue-200 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="w-16 h-px bg-white group-hover:bg-blue-200 transition-colors duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
