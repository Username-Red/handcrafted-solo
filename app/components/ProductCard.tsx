import Link from "next/link";
import Image from "next/image";
import { Product } from "@prisma/client";

type Props = {
  product: Product & { user?: { name: string | null } };
};

export default function ProductCard({ product }: Props) {
  if (!product) return null;
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="border rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition transform hover:-translate-y-2 hover:rotate-1">
        <Image
          src={`/${product.image}` || "images/placeholder.webp"}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain"
        />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-1">
          By: {product.user?.name ?? "Unknown"}
        </p>
      </div>
    </Link>
  );
}
