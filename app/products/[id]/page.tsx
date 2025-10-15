import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

type Props = {
  params: { id: string };
};

export default async function ProductDetail({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
    include: { user: true },
  });

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image
        src={`/${product.image}` || "images/placeholder.webp"}
        alt={product.name}
        width={400}
        height={400}
        className="object-contain mb-4"
      />
      <p className="text-xl font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
      <p className="text-gray-700 mb-2">Seller: {product.user?.name || "Unknown"}</p>
      <p className="text-gray-600">Product ID: {product.id}</p>
    </div>
  );
}
