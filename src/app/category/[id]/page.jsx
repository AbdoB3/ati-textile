import Link from "next/link";
import Product from "@/app/product/products";
import { productsData } from "@/lib/products-data";
import Image from "next/image";
import DestinationCardDemo from "@/components/featureImg";
export default async function CategoryPage({ params }) {
  const categoryData = {
  "matiere-chaussure": {
    title: "Matières pour Chaussure",
    description:
      "Des matériaux fiables pour une fabrication robuste et durable",
    backgroundImage: "/chaussure.png",
    backgroundImage2: "/chaussure.png",

    heading1: "Composants techniques pour la fabrication de chaussures",
    heading2:
      "Nous fournissons EVA, plaques, colles et matières premières assurant résistance, confort et tenue dans le temps.",
  },

  ameublement: {
    title: "Textile d'Ameublement",
    description:
      "Des tissus élégants et résistants pour l’intérieur et l’extérieur",
    backgroundImage: "/ameublement.png",
    backgroundImage2: "/ameublement4.png",

    heading1: "Tissus décoratifs pour espaces résidentiels et professionnels",
    heading2:
      "Velours, toiles, similicuir et textiles outdoor conçus pour offrir esthétique, confort et durabilité au quotidien.",
  },

  "tissus-automobiles": {
    title: "Tissus Automobiles",
    description:
      "Solutions textiles techniques conformes aux exigences de l’industrie automobile.",
    backgroundImage: "/automobile.png",
    backgroundImage2: "/automobile2.png",

    heading1: "Confort, résistance et finition premium",
    heading2:
      "Nos tissus offrent une excellente résistance, un entretien simplifié et une durabilité éprouvée pour les intérieurs automobiles.",
  },
};


  const resolvedParams = await params;
  const category = categoryData[resolvedParams.id];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Catégorie introuvable</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header with Background Image */}
      <div
        className="relative bg-cover bg-center border-b border-gray-200      "
        style={{
          backgroundImage: `url('${category.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#262856]/40"></div>

        <div className="relative max-w-4xl mx-auto px-4 py-28">
          <Link
            href="/"
            className="text-white hover:text-gray-200 mb-4 inline-block text-sm transition-colors"
          >
            ← Retour à l’accueil
          </Link>
          <h1 className="text-4xl md:text-xl font-bold text-white mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-gray-100">{category.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full bg-background sm:p-4 md:p-6">
        
        {/* Feature with img */}
        <div className="mx-5 md:mx-20">
          <div className="w-full py-10 ">
            <div className="container mx-auto">
              
              <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
                
                <div className="bg-muted hidden lg:block rounded-md w-8 h-full flex-1 relative">
                  <DestinationCardDemo 
                  src={category.backgroundImage2}
                  alt={category.title}
                  fill
                  className="object-cover rounded-md"
                  />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1 py-10">
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl lg:mb-4 md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                      {category.heading1}
                    </h2>
                    <p className="text-xl max-w-5xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                      {category.heading2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product */}
        <div className="p-4">
          <Product products={productsData[resolvedParams.id]} />
        </div>
      </div>
    </main>
  );
}
