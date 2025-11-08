import Link from "next/link";
import Product from "@/app/product/products";
import { productsData } from "@/lib/products-data";
import Image from "next/image";
export default async function CategoryPage({ params }) {
  const categoryData = {
    "matiere-chaussure": {
      title: "Matières pour Chaussure",
      description:
        "Des matériaux fiables pour une fabrication robuste et durable",
      backgroundImage: "/chaussure.png",
      titleImage: "this is the image title",
      heading1: "this is the heading1 title",
      heading2: "this is the heading2 title",
    },
    ameublement: {
      title: "Textile d'Ameublement",
      description:
        "Des tissus élégants et résistants pour l’intérieur et l’extérieur",
      backgroundImage: "/ameublement.png",
      titleImage: "this is the image title",
      heading1: "this is the heading1 title",
      heading2: "this is the heading2 title",
    },
    "tissus-automobiles": {
      title: "Tissus Automobiles",
      description:
        "Solutions textiles adaptées aux normes du secteur automobile",
      backgroundImage: "/automobile.png",
      titleImage: "this is the image title",
      heading1: "this is the heading1 title",
      heading2: "this is the heading2 title",
    },
  };

  const resolvedParams = await params;
  const category = categoryData[resolvedParams.id];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with Background Image */}
      <div
        className="relative bg-cover bg-center border-b border-gray-200"
        style={{
          backgroundImage: `url('${category.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-4xl mx-auto px-4 py-20">
          <Link
            href="/"
            className="text-white hover:text-gray-200 mb-4 inline-block text-sm transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-gray-100">{category.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full bg-background p-4 sm:p-6 md:p-8">
        {/* Feature with img */}
        <div className="mx-10 md:mx-20">
          <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-start">
                    Découvrez Nos Solutions Textiles pour {category.titleImage}
                  </h2>
              <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                <div className="bg-muted rounded-md w-full aspect-video h-full flex-1 relative">
                  
                  <Image
                    src={category.backgroundImage}
                    alt="Feature Image"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                      {category.heading1}
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                      {category.heading2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product */}
        <div>
          <Product products={productsData[resolvedParams.id]} />
        </div>
      </div>
    </main>
  );
}
