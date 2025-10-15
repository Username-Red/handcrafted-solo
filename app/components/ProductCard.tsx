import React from "react";
import BuyNowBtn from "./BuyNowBtn";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="card w-96 bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:rotate-1">
      <figure className="px-10 pt-10">
        <img
          src={image || "/images/placeholder.webp"}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <div className="card-actions">
          <BuyNowBtn />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
