import Link from "next/link";
import Product from "@/components/Products/products";
import { productsData } from "@/lib/products-data";

export default async function CategoryPage({ params }) {
  const categoryData = {
    "matiere-chaussure": {
      title: "Matières pour Chaussure",
      description:
        "Des matériaux fiables pour une fabrication robuste et durable",
      backgroundImage: "/chaussure.png",
    },
    ameublement: {
      title: "Textile d'Ameublement",
      description:
        "Des tissus élégants et résistants pour l’intérieur et l’extérieur",
      backgroundImage: "/ameublement.png",
    },
    "tissus-automobiles": {
      title: "Tissus Automobiles",
      description:
        "Solutions textiles adaptées aux normes du secteur automobile",
      backgroundImage: "/automobile.png",
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
        <Product products={productsData[resolvedParams.id]}/>
      </div>
    </main>
  );
}
