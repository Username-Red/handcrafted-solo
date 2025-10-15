import React from "react";
import ProductCard from "./ProductCard";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ProductsList = async () => {
  // Fetch products from the database
  const products = await prisma.product.findMany();
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
