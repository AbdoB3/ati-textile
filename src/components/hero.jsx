import Image from "next/image";
import Link from "next/link";
// import africaHero from "/africaHero.png";

export default function Hero() {
  const categories = [
    {
      id: "matiere-chaussure",
      title: "Matière Chaussure",
      image:
        "/chaussure.png",
    },
    {
      id: "ameublement",
      title: "Ameublement",
      image:
        "https://richbondindustry.com/media/.renditions/wysiwyg/cms/Ameublement_1_.jpg",
    },

    {
      id: "tissus-automobiles",
      title: "Tissus automobiles",
      image:
        "https://images.unsplash.com/photo-1636647510477-5ec1593b8be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXJ8ZW58MXx8fHwxNzYyODgyOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "textiles",
      title: "Autres Textiles",
      image:
        "https://laquotidienne.ma/uploads/actualites/6453aeb996602_Capture%20d'%C3%A9cran%202023-05-04%20140752.png",
    },
  ];

  return (
    <section
      className="py-24 px-4 relative md:py-40 bg-cover bg-center bg-fixed "
      style={{
        backgroundImage: `url(/africaHero.png)`,
      }}
    >
      <div className="absolute inset-0 bg-[#262856]/80" />

      <div className=" max-w-[100rem] mx-auto relative z-10">
        <div className="max-w-[120rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group cursor-pointer"
              >
                <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-[32rem]">
                  {/* Tall category image */}
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />

                  {/* Title - bottom center with refined styling */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                    <h3 className="text-lg font-semibold text-white text-center group-hover:text-blue-200 transition-colors duration-300">
                      {category.title}
                    </h3>
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
