"use client";

import Link from "next/link";
import { use, useState } from "react";
import { productDetailsData } from "@/lib/products-data";
import { ChevronDown } from "lucide-react";

const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
};

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const product = productDetailsData[resolvedParams.id];
  const [openSections, setOpenSections] = useState({
    applications: true,
    specifications: false,
  });

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: COLORS.cream }}
      >
        <div className="text-center">
          <h1
            className="pd-font-display text-4xl font-light mb-4"
            style={{ color: COLORS.navy }}
          >
            Produit introuvable
          </h1>
          <Link href="/" className="pd-font-body text-sm" style={{ color: COLORS.gold }}>
            <span className="hover:underline">Retour à l&rsquo;accueil</span>
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
    <main className="min-h-screen" style={{ backgroundColor: COLORS.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .pd-font-display { font-family: 'Fraunces', serif; }
        .pd-font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Product Detail */}
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border"
              style={{ borderColor: "rgba(198,167,94,0.35)" }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Product Information */}
          <div>
            <h1
              className="pd-font-display font-light text-4xl mb-4 leading-tight"
              style={{ color: COLORS.navy }}
            >
              {product.title}
            </h1>
            <p
              className="pd-font-body text-lg mb-8 leading-relaxed"
              style={{ color: "rgba(31,42,68,0.7)" }}
            >
              {product.description}
            </p>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {/* Applications Section */}
              <div
                className="rounded-lg border bg-white overflow-hidden"
                style={{ borderColor: "rgba(31,42,68,0.1)" }}
              >
                <button
                  onClick={() => toggleSection("applications")}
                  className="w-full px-6 py-4 flex items-center justify-between transition-colors"
                  style={{ backgroundColor: "transparent" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(198,167,94,0.06)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <h2
                    className="pd-font-body text-base font-semibold"
                    style={{ color: COLORS.navy }}
                  >
                    Applications
                  </h2>
                  <ChevronDown
                    size={20}
                    className="transition-transform"
                    style={{
                      color: COLORS.gold,
                      transform: openSections.applications ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openSections.applications && (
                  <div
                    className="px-6 py-4 border-t"
                    style={{ borderColor: "rgba(31,42,68,0.1)", backgroundColor: "rgba(198,167,94,0.04)" }}
                  >
                    <ul className="space-y-2">
                      {product.applications.map((app, idx) => (
                        <li
                          key={idx}
                          className="pd-font-body flex items-center"
                          style={{ color: "rgba(31,42,68,0.75)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                            style={{ backgroundColor: COLORS.gold }}
                          />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Specifications Section */}
              {/* <div
                className="rounded-lg border bg-white overflow-hidden"
                style={{ borderColor: "rgba(31,42,68,0.1)" }}
              >
                <button
                  onClick={() => toggleSection("specifications")}
                  className="w-full px-6 py-4 flex items-center justify-between transition-colors"
                >
                  <h2 className="pd-font-body text-base font-semibold" style={{ color: COLORS.navy }}>
                    Caractéristiques techniques
                  </h2>
                  <ChevronDown
                    size={20}
                    style={{
                      color: COLORS.gold,
                      transform: openSections.specifications ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openSections.specifications && (
                  <div
                    className="px-6 py-4 border-t"
                    style={{ borderColor: "rgba(31,42,68,0.1)", backgroundColor: "rgba(198,167,94,0.04)" }}
                  >
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="pd-font-body font-medium" style={{ color: COLORS.navy }}>
                            {key}:
                          </span>
                          <span className="pd-font-body" style={{ color: "rgba(31,42,68,0.65)" }}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div> */}
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <Link href="/contact">
                <button
                  className="w-full cursor-pointer py-3 rounded-lg font-semibold transition-colors duration-300"
                  style={{ backgroundColor: COLORS.gold, color: COLORS.navy }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B3944F")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.gold)}
                >
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}