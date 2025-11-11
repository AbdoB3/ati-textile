import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Feature() {
  return (
    <div id="about" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1 relative">
            <Image
              src="/warehouse1.png"
              alt="Feature Image"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
            <div>
              <Badge>A propos</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Excellence & Innovation dans le Textile Industriel
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Chez{" "}
                <span className="font-semibold text-blue-500">
                  Africa Trade & Industry
                </span>
                , nous réunissons les meilleurs matériaux pour les secteurs de
                l’<b>ameublement</b>, de l’<b>automobile</b> et de la {' '}
                <b>chaussure</b>. Grâce à notre expertise et à un réseau solide
                à travers l’Afrique, nous offrons des solutions textiles
                complètes, alliant qualité, innovation et durabilité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
