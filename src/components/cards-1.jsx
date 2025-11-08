import { cn } from "@/lib/utils";

const ProductCard = (
  ({ className, imageUrl, title, category, href, onSave, ...props }, ref) => {

    return (
      <div
        ref={ref}
        className={cn(
          "group relative block overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-in-out hover:shadow-lg",
          className
        )}
        {...props}>
        <a href={href} aria-label={title}>
          {/* Image container with aspect ratio */}
          <div className="aspect-square overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
          </div>
          {/* Card content */}
          <div className="p-4">
            <h3 className="font-semibold leading-tight truncate">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{category}</p>
          </div>
        </a>
        {/* Save button - appears on hover */}
        {/* <Button
          variant="secondary"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
          aria-label="Save thing">
          <Bookmark className="h-4 w-4" />
        </Button> */}
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard";

export { ProductCard };