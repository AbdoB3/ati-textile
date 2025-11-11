"use client";

import Link from "next/link";
import { use,useState } from "react";
import { productDetailsData } from "@/lib/products-data";
import { ChevronDown } from "lucide-react";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const product = productDetailsData[resolvedParams.id];
  const [openSections, setOpenSections] = useState({
    applications: true,
    specifications: false,
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Navigation */}

      {/* Product Detail */}
      <div className="max-w-6xl mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Product Information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {/* Applications Section */}
              <div className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => toggleSection("applications")}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-lg font-semibold text-gray-900">
                    Applications
                  </h2>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform ${
                      openSections.applications ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.applications && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <ul className="space-y-2">
                      {product.applications.map((app, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 flex items-center"
                        >
                          <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Specifications Section */}
              <div className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => toggleSection("specifications")}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-lg font-semibold text-gray-900">
                    Caractéristiques techniques
                  </h2>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform ${
                      openSections.specifications ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSections.specifications && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-700 font-medium">
                              {key}:
                            </span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contacter-Nous
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
