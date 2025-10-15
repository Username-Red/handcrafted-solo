import { PrismaClient } from "@prisma/client";
import ProductCard from "@/app/components/ProductCard";

const prisma = new PrismaClient();

type Props = {
  params: { id: string };
};

export default async function SellerPage({ params }: Props) {
  // Fetch the seller along with their products
  const seller = await prisma.user.findUnique({
    where: { id: params.id },
    include: { products: true }, // lowercase plural
  });

  if (!seller) return <p>Seller not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {seller.name ?? "Unknown Seller"}'s Products
      </h1>

      {seller.products.length === 0 ? (
        <p>No products found for this seller.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {seller.products.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, user: { name: seller.name } }} 
              // pass the seller name so ProductCard can display it
            />
          ))}
        </div>
      )}
    </div>
  );
}
