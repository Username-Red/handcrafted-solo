import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

type Props = {
  params: { id: string };
};

export default async function ProductDetail({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
    include: { user: true },
  });

  if (!product) return <p className="text-center mt-8 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6 p-6">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={`/${product.image}` || "/images/placeholder.webp"}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-800 font-semibold mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-4">
              Seller:{" "}
              {product.user ? (
                <Link
                  href={`/sellers/${product.user.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {product.user.name || "Unknown"}
                </Link>
              ) : (
                "Unknown"
              )}
            </p>
            <p className="text-gray-500">Product ID: {product.id}</p>
          </div>

          <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
            Contact Seller
          </button>
        </div>
      </div>

      {/* Optional description section */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-700">
          {/* Placeholder description */}
          This is a high-quality handcrafted product. Perfect for gifts or personal use. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet turpis non sem bibendum convallis.
        </p>
      </div>
    </div>
  );
}
