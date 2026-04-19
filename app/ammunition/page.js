import { getCollectionData } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: "Ammunition | Kurtz Mill Munitions LLC",
  description: "Browse our extensive collection of rifle, handgun, and shotgun ammunition.",
};

export default async function AmmunitionPage() {
  const products = await getCollectionData('ammunition');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Ammunition
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            From bulk range ammo to premium match-grade cartridges, we carry a wide selection of calibers to keep you on target.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.slug} item={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
               <p className="text-muted-foreground">Our current ammunition inventory is being updated. Please check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
