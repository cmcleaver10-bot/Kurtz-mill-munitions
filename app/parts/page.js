import { getCollectionData } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: "Firearm Parts, Components & Accessories | Mohnton, PA",
  description: "Browse high-quality firearm parts and components in Mohnton, PA. From AR-15 triggers to Glock parts, we serve the Berks County area with premium gear.",
};

export const dynamic = "force-dynamic";

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
            Upgrade your experience with premium optics and components. We provide high-quality parts to shooters in Mohnton, Birdsboro, Reading, and the surrounding Berks County area.
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
