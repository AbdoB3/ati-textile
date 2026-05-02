import Image from "next/image";

function Feature() {
  return (
    <div id="about" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="bg-muted rounded-md w-full aspect-video flex-1 relative">
            <Image
              src="/warehouse1.png"
              alt="Feature Image"
              fill
              className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex gap-6 lg:gap-8 pl-0 lg:pl-20 flex-col flex-1">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl text-left">
                Excellence & Innovation dans le
                <span className="text-primary"> Textile Industriel</span>
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-1"></div>

              <p className="text-base md:text-lg max-w-xl lg:max-w-2xl mt-3 leading-relaxed text-gray-700">
                Depuis Casablanca, Africa Trade & Industry facilite l’accès aux
                textiles les plus performants du marché international.
                <br />
                Grâce à un réseau de partenaires de confiance, nous proposons
                une sélection rigoureuse de matières haut de gamme :
                ameublement, simili cuir, textile automobile, EVA et fournitures
                professionnelles.
                <br />
                Nous accompagnons chaque client avec une approche sur mesure, en
                garantissant exigence, fiabilité et excellence à chaque étape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
