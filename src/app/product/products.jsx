import { ProductCard } from "@/components/cards-1";


// Sample data for demonstration


export default function ProductCardDemo({products = []}) {
  return (
    <div className="mx-auto max-w-7xl">
      {products.length === 0 ? (
        <p className="text-center text-muted-foreground">Aucun produit disponible</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id || `product-${index}`}
              title={product.title}
              category={product.category}
              imageUrl={product.imageUrl}
              href={product.href}
            />
          ))}
        </div>
      )}
    </div>
  );
}