import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { liquidationProducts } from "@/lib/liquidation-data";

export const metadata = {
  title: "Déstockage | Africa Trade & Industry",
  description:
    "Découvrez les lots professionnels disponibles au déstockage chez Africa Trade & Industry.",
};

export default function LiquidationPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-5 pb-20 pt-32 text-[#1f2a44] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7851]">
            <span>Sélection du moment</span>
            <span className="h-px w-10 bg-[#c6a75e]" />
          </div>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Les bonnes affaires du déstockage
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#59606b] sm:text-lg">
            Des lots professionnels à prix avantageux, disponibles en quantité
            limitée. Contactez notre équipe pour confirmer le stock et recevoir
            votre offre.
          </p>
          <p className="mt-3 text-xs text-[#77736b]">
            Maquette de présentation : prix et disponibilités à confirmer.
          </p>
        </header>

        <section
          aria-label="Lots disponibles au déstockage"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {liquidationProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#e6e0d5] bg-white shadow-[0_3px_16px_rgba(31,42,68,0.04)] transition-shadow hover:shadow-[0_12px_30px_rgba(31,42,68,0.1)]"
            >
              <Link
                href={`/liquidation/${product.id}`}
                className="relative block aspect-[1.15/1] overflow-hidden bg-[#eee9df]"
                aria-label={`Voir le lot : ${product.title}`}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-white ${
                    product.available ? "bg-[#426b45]" : "bg-[#9f5148]"
                  }`}
                >
                  {product.availability}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a7851]">
                  {product.category}
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold leading-snug">
                  {product.title}
                </h2>
                <p className="mt-1 text-sm text-[#656a70]">
                  {product.subtitle}
                </p>
                <p className="mt-3 text-xs text-[#77736b]">
                  {product.quantity}
                </p>

                <div className="mt-auto pt-4">
                  <p className="mb-3 border-t border-[#eee9df] pt-3 text-sm text-[#454950]">
                    {product.price}
                  </p>
                  <Link
                    href={`/liquidation/${product.id}`}
                    className="flex min-h-11 items-center justify-between rounded-md bg-[#222321] px-4 text-sm font-medium text-white transition-colors hover:bg-[#3a3b38]"
                  >
                    Voir le lot
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-xl border border-[#e6e0d5] bg-white/75 p-6 sm:p-8">
          <div className="mb-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a7851]">
              Simple et sans engagement
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
              Comment obtenir une offre ?
            </h2>
            <p className="mt-2 text-sm text-[#656a70]">
              Un échange avec notre équipe pour confirmer le lot et son prix.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["01", "Nous contacter", "Indiquez la référence du lot souhaité."],
              ["02", "Confirmer le stock", "Notre équipe vérifie la disponibilité."],
              ["03", "Discuter du prix", "Le prix final dépend du lot et de la quantité."],
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-4 border-t border-[#eee9df] pt-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3efe6] font-serif text-sm">
                  {number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-5 text-[#656a70]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 border-t border-[#eee9df] pt-4 text-xs text-[#77736b]">
            <ArrowUpRight size={15} aria-hidden="true" />
            Aucun paiement en ligne : chaque offre est confirmée par notre équipe.
          </p>
        </section>
      </div>
    </main>
  );
}
