import { getCollectionData } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: "Used Firearms | Kurtz Mill Munitions LLC",
  description: "Quality pre-owned firearms inspected and certified by our expert gunsmiths.",
};

export default async function UsedFirearmsPage() {
  const products = await getCollectionData('firearms');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Used Firearms
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Our pre-owned inventory is thoroughly inspected for safety and performance. Find great deals on reliable handguns, rifles, and shotguns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.slug} item={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
               <p className="text-muted-foreground">Our used inventory is currently sold out. Please check back later or contact us about trade-ins.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
