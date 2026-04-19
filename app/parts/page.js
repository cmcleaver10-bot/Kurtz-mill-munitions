import { getCollectionData } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: "Parts & Accessories | Kurtz Mill Munitions LLC",
  description: "Enhance your firearms with our selection of premium parts and accessories.",
};

export default async function PartsPage() {
  const products = await getCollectionData('parts');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Parts & Accessories
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Upgrade your experience with high-quality optics, grips, stocks, and replacement components from the industry's leading manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.slug} item={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
               <p className="text-muted-foreground">Our current parts catalog is being updated. Please check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
