import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl  transition-all duration-300 overflow-hidden">

      {/* Image */}
      <div className="relative bg-gray-50 p-4 flex items-center justify-center h-56">

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition">
          <FaHeart size={13} />
        </button>

        {/* Quick View */}
        <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <FiEye size={14} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h2 className="text-[15px] font-medium text-gray-800 line-clamp-2 min-h-[40px]">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-yellow-400 text-[12px]">
            <FaStar /><FaStar /><FaStar /><FaStar />
            <FaStar className="text-gray-300" />
          </div>
          <span className="text-[12px] text-gray-500">(4.8)</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-end gap-2">
          <span className="text-xl font-bold text-gray-900">
            ৳ {product.price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ৳ {product.price + 1200}
          </span>
        </div>

        {/* Stock */}
        <p className="text-[12px] text-green-600 mt-1 font-medium">
          ● In Stock
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">

          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center py-2 rounded-lg border border-gray-200 text-gray-700 text-[12px] hover:border-orange-500 hover:text-orange-500 transition"
          >
            View
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 py-2 rounded-lg bg-orange-500 text-white text-[12px] font-semibold hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;