import React from 'react'
import BuyNowBtn from './BuyNowBtn'

const ProductCard = () => {
  return (
    <div className="card w-96 bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out hover:rotate-1">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Card Title</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions">
          <BuyNowBtn />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
