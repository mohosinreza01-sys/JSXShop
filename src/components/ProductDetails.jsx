import { useParams } from "react-router-dom";
import products from "../data/product";
import { FaShoppingCart, FaBolt, FaStar, FaTruck, FaUndo, FaShieldAlt } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400 text-lg">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans">

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT: IMAGE ================= */}
        <div className="lg:col-span-2 space-y-4">

          <div className="bg-white border border-gray-200 rounded-3xl p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </div>

          {/* trust badges */}
          <div className="grid grid-cols-3 gap-3 text-xs text-gray-600">

            <div className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center gap-2 justify-center">
              <FaTruck />
              Free Delivery
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center gap-2 justify-center">
              <FaUndo />
              7 Days Return
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center gap-2 justify-center">
              <FaShieldAlt />
              Secure Payment
            </div>

          </div>

        </div>

        {/* ================= RIGHT: BUY BOX ================= */}
        <div className="lg:sticky lg:top-10 h-fit space-y-5">

          {/* PRODUCT CARD */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6">

            <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* rating */}
            <div className="flex items-center gap-2 mt-3 text-sm">
              <div className="flex text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-gray-500">(4.5)</span>
            </div>

            {/* price */}
            <div className="mt-5">
              <p className="text-3xl font-semibold text-gray-900">
                ${product.price}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            {/* description */}
            <p className="mt-5 text-sm text-gray-500 leading-6">
              Premium quality product with modern design, built for long-term performance and everyday use.
            </p>

            {/* buttons */}
            <div className="mt-6 space-y-3">

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gray-900 text-white py-3 rounded-2xl text-sm font-medium hover:bg-black transition flex items-center justify-center gap-2"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

              <button className="w-full border border-gray-200 text-gray-900 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <FaBolt />
                Buy Now
              </button>

            </div>

          </div>

          {/* DELIVERY INFO BOX */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 text-sm text-gray-600 space-y-2">

            <p className="font-medium text-gray-900 mb-2">
              Delivery Information
            </p>

            <p>• Delivery within 2–5 days in Bangladesh</p>
            <p>• Cash on Delivery available</p>
            <p>• Easy return & refund support</p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;