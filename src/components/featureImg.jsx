import { DestinationCard } from "@/components/card"; // Adjust path as needed

export default function DestinationCardDemo({src, alt, ...props}) {

  return (
    <div className="flex items-center justify-center bg-background">
      <div className="w-full max-w-sm h-[450px]">
        <DestinationCard
          imageUrl={src}
          category="Paris"  
          title={alt}
          aria-label="View details for a tour in Paris, France"
        />
      </div>
    </div>
  );
}

