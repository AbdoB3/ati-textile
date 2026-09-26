import Image from "next/image";

const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
};

const materials = [
  "Ameublement",
  "Simili cuir",
  "Textile automobile",
  "EVA",
  "Fournitures professionnelles",
];

function Feature() {
  return (
    <div id="about" className="w-full py-20 lg:py-32" style={{ backgroundColor: COLORS.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .feat-font-display { font-family: 'Fraunces', serif; }
        .feat-font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 sm:px-10 md:px-14">
        <div className="flex flex-col-reverse lg:flex-row gap-14 lg:gap-10 items-center">
          {/* Image */}
          <div className="relative w-full flex-1">
            {/* offset frame peeking out behind the image */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border"
              style={{ borderColor: "rgba(198,167,94,0.4)" }}
            />
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/BOTTOM-PICTURE.png"
                alt="Entrepôt Africa Trade & Industry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(20,26,44,0.35) 0%, rgba(20,26,44,0) 40%)" }}
              />
            </div>

            {/* Floating location badge */}
            <div
              className="absolute -bottom-6 left-6 flex items-center gap-2.5 rounded-lg px-4 py-3 shadow-lg"
              style={{ backgroundColor: COLORS.navy }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.gold }} />
              <span
                className="feat-font-body text-xs sm:text-sm tracking-wide"
                style={{ color: COLORS.cream }}
              >
                Depuis Casablanca, Maroc
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col flex-1 lg:pl-10">
            <div
              className="feat-font-body text-xs sm:text-sm tracking-[0.25em] uppercase mb-4"
              style={{ color: COLORS.gold }}
            >
              À propos
            </div>

            <h2
              className="feat-font-display font-light leading-[1.1] max-w-2xl text-left mb-5"
              style={{ color: COLORS.navy, fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}
            >
              Excellence &amp; Innovation dans le{" "}
              <span style={{ color: COLORS.gold }}>Textile Industriel</span>
            </h2>

            <div className="h-px w-16 mb-7" style={{ backgroundColor: COLORS.gold }} />

            <div
              className="feat-font-body space-y-4 text-base md:text-lg leading-relaxed max-w-xl lg:max-w-2xl"
              style={{ color: "rgba(31,42,68,0.72)" }}
            >
              <p>
                Depuis Casablanca, Africa Trade &amp; Industry facilite l&rsquo;accès aux textiles les plus
                performants du marché international.
              </p>
              <p>
                Grâce à un réseau de partenaires de confiance, nous proposons une sélection rigoureuse de
                matières haut de gamme.
              </p>
              <p>
                Nous accompagnons chaque client avec une approche sur mesure, en garantissant exigence,
                fiabilité et excellence à chaque étape.
              </p>
            </div>

            {/* Material tags — grounded in the categories mentioned above */}
            {/* <div className="flex flex-wrap gap-2.5 mt-7">
              {materials.map((m) => (
                <span
                  key={m}
                  className="feat-font-body text-xs sm:text-sm tracking-wide px-3.5 py-1.5 rounded-full border"
                  style={{
                    color: COLORS.navy,
                    borderColor: "rgba(31,42,68,0.15)",
                    backgroundColor: "rgba(198,167,94,0.08)",
                  }}
                >
                  {m}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };