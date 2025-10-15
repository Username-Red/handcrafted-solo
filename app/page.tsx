import ProductCard from "@/app/components/ProductCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
  params: { id: string }
};

export default async function ProductDetail({ params }: Props) {
  const { id } = await params; 

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
    include: { user: true },
  });

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Seller: {product.user.name}</p>
      <img src={product.image} alt={product.name} className="w-64 mt-4" />
    </div>
  );
}
