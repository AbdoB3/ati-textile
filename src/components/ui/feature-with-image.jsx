import Image from "next/image";

function Feature() {
  return (
    <div id="about" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1 relative">
            <Image
              src="/warehouse1.png"
              alt="Feature Image"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl text-left md:pt-2">
                Excellence & Innovation dans le Textile Industriel
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg lg:mt-2 leading-relaxed tracking-tight text-muted-foreground text-left">
                <b>Africa Trade & Industry</b> incarne l’alliance entre expertise
                textile et sourcing international haut de gamme. Depuis
                Casablanca, nous sélectionnons des matières d’exception — tissus
                d’ameublement, simili cuir, textiles automobiles, EVA et
                fournitures professionnelles — auprès de fabricants
                internationaux réputés. Notre mission : offrir à chaque client
                professionnel une qualité irréprochable, un choix exclusif et un
                accompagnement sur-mesure répondant aux standards les plus
                élevés du marché.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
