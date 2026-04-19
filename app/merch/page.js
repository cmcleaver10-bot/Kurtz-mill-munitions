import { getCollectionData } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: "Merch | Kurtz Mill Munitions LLC",
  description: "Shop Kurtz Mill Munitions apparel and accessories.",
};

export default async function MerchPage() {
  const products = await getCollectionData('merch');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Merchandise
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Represent your favorite shop with our custom apparel, hats, and everyday carry gear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.slug} item={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
               <p className="text-muted-foreground">Our new merch drop is coming soon! Stay tuned.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
