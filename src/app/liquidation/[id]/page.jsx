import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { notFound } from "next/navigation";
import { getLiquidationProduct } from "@/lib/liquidation-data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getLiquidationProduct(id);

  return {
    title: product
      ? `${product.title} | Déstockage ATI`
      : "Lot introuvable | Déstockage ATI",
    description: product
      ? `${product.subtitle}. Contactez Africa Trade & Industry pour confirmer la disponibilité.`
      : "Ce lot de déstockage n’est pas disponible.",
  };
}

export default async function LiquidationProductPage({ params }) {
  const { id } = await params;
  const product = getLiquidationProduct(id);

  if (!product) {
    notFound();
  }

  const contactSubject = encodeURIComponent(
    `Demande d'information - ${product.reference} - ${product.title}`
  );

  return (
    <main className="min-h-screen bg-[#f7f3ec] px-5 pb-20 pt-32 text-[#1f2a44] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-[#73716b]">
          <Link href="/" className="transition-colors hover:text-[#1f2a44]">
            Accueil
          </Link>
          <span className="px-2">/</span>
          <Link
            href="/liquidation"
            className="transition-colors hover:text-[#1f2a44]"
          >
            Déstockage
          </Link>
          <span className="px-2">/</span>
          <span className="text-[#1f2a44]">{product.title}</span>
        </nav>

        <Link
          href="/liquidation"
          className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-[#565b61] transition-colors hover:text-[#1f2a44]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Retour aux lots
        </Link>

        <div className="grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#eee9df] shadow-[0_8px_28px_rgba(31,42,68,0.08)]">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <section className="flex flex-col">
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium text-white ${
                  product.available ? "bg-[#426b45]" : "bg-[#9f5148]"
                }`}
              >
                {product.availability}
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-[#8a7851]">
                {product.category}
              </span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-2 text-lg text-[#565b61]">{product.subtitle}</p>

            <div className="mt-7 border-y border-[#ded8cc] py-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#77736b]">
                Prix indicatif
              </p>
              <p className="mt-1 font-serif text-2xl font-semibold">
                {product.price}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-serif text-2xl font-semibold">Détails du lot</h2>
              <dl className="mt-3 divide-y divide-[#e5dfd4]">
                {[
                  ["Référence", product.reference],
                  ["Type", product.material],
                  ["Couleur", product.color],
                  ["Quantité", product.quantity],
                  ["Disponibilité", product.availability],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-5 py-3 text-sm"
                  >
                    <dt className="text-[#77736b]">{label}</dt>
                    <dd className="text-right font-medium text-[#34383f]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={`https://wa.me/212661716575?text=${contactSubject}`}
              className="mt-7 flex min-h-12 items-center justify-between rounded-md bg-[#222321] px-5 text-sm font-medium text-white transition-colors hover:bg-[#3a3b38]"
            >
              {product.available ? "Nous contacter pour ce lot" : "Demander les prochaines disponibilités"}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className="mt-3 text-xs leading-5 text-[#77736b]">
              Le stock et le prix sont confirmés par notre équipe avant toute
              commande.
            </p>
          </section>
        </div>

        <section className="mt-12 rounded-xl border border-[#e6e0d5] bg-white/75 p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-semibold">
            Comment obtenir une offre ?
          </h2>
          <p className="mt-2 text-sm text-[#656a70]">
            Un échange avec notre équipe pour confirmer le stock et le prix.
          </p>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              ["Nous contacter", "Envoyez la référence du lot."],
              ["Confirmer le stock", "Nous vérifions la quantité disponible."],
              ["Discuter du prix", "Nous préparons une offre adaptée au lot."],
            ].map(([title, description], index) => (
              <li
                key={title}
                className="flex items-start gap-3 border-t border-[#eee9df] pt-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3efe6] text-[#8a7851]">
                  <span className="font-serif text-sm">0{index + 1}</span>
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-[#656a70]">{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-center gap-2 border-t border-[#eee9df] pt-4 text-xs text-[#77736b]">
            <Info size={15} aria-hidden="true" />
            Aucun paiement en ligne n’est demandé sur cette page.
          </p>
        </section>
      </div>
    </main>
  );
}
