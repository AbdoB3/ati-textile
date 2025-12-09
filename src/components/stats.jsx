export default function ExpertiseSection() {
  const expertiseItems = [
    {
      title: "Expertise Approfondie",
      description:
        "Des années d'expérience dédiées à l'innovation et à la maîtrise des matériaux textiles.",
    },
    {
      title: "Qualité Contrôlée",
      description:
        "Des processus rigoureux pour garantir des matériaux fiables, durables et adaptés aux exigences professionnelles.",
    },
    {
      title: "Fiabilité & Engagement",
      description:
        "Une sélection méticuleuse de matières et un accompagnement continu pour assurer l'excellence de vos projets.",
    },
  ];

  return (
    <section className="pb-24 pt-4 px-4 bg-white relative overflow-hidden">
      {/* Subtle background accent image on right */}
      <div
        className="absolute hidden md:block right-0 top-0 w-1/3 h-full opacity-5 rounded-xl pointer-events-none"
        style={{
          backgroundImage: "url('/africaHero.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Vertical separators for desktop */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

          {expertiseItems.map((item, index) => (
            <div key={index} className="flex flex-col relative">
              {/* Horizontal separator for mobile (above each item except first) */}
              {index > 0 && (
                <div className="md:hidden absolute -top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
