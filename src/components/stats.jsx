const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
};

const expertiseItems = [
  {
    number: "01",
    title: "Expertise Approfondie",
    description:
      "Des années d'expérience dédiées à l'innovation et à la maîtrise des matériaux textiles.",
  },
  {
    number: "02",
    title: "Qualité Contrôlée",
    description:
      "Des processus rigoureux pour garantir des matériaux fiables, durables et adaptés aux exigences professionnelles.",
  },
  {
    number: "03",
    title: "Fiabilité & Engagement",
    description:
      "Une sélection méticuleuse de matières et un accompagnement continu pour assurer l'excellence de vos projets.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="pb-24 pt-5 px-4 relative overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .exp-font-display { font-family: 'Fraunces', serif; }
        .exp-font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Subtle background accent image on right */}
      <div
        className="absolute hidden md:block right-0 top-0 w-1/3 h-full opacity-[0.06] rounded-xl pointer-events-none"
        style={{
          backgroundImage: "url('/africaHero.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Vertical separators for desktop */}
          <div
            className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, rgba(198,167,94,0.35), transparent)" }}
          />
          <div
            className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, rgba(198,167,94,0.35), transparent)" }}
          />

          {expertiseItems.map((item, index) => (
            <div key={index} className="flex flex-col relative">
              {/* Horizontal separator for mobile (above each item except first) */}
              {index > 0 && (
                <div
                  className="md:hidden absolute -top-6 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(198,167,94,0.35), transparent)" }}
                />
              )}

              <span
                className="exp-font-display italic text-xl mb-3"
                style={{ color: COLORS.gold }}
              >
                {item.number}
              </span>

              <h3
                className="exp-font-display font-medium text-2xl mb-3 leading-tight"
                style={{ color: COLORS.navy }}
              >
                {item.title}
              </h3>

              <div className="h-px w-10 mb-4" style={{ backgroundColor: COLORS.gold }} />

              <p
                className="exp-font-body text-base leading-relaxed"
                style={{ color: "rgba(31,42,68,0.65)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}