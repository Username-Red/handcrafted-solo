import React from "react";
import ProductCard from "./ProductCard";
import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient();

const ProductsList = async () => {
  // Fetch products from the database
  const products = await prisma.product.findMany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
  );
};

export default ProductsList;
