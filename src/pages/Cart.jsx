import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    incrementQty,
    decrementQty,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 md:px-10">

      {/* ================= PREMIUM HEADER ================= */}
      <div className="max-w-6xl mx-auto mb-10">

        <div className="bg-white border border-gray-200 rounded-3xl px-8 py-8 shadow-sm flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          {/* LEFT TEXT */}
          <div>

            <p className="text-[11px] uppercase tracking-[4px] text-gray-400">
              Shopping Experience
            </p>

            <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
              Your Cart
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Review items and proceed to secure checkout
            </p>

          </div>

          {/* RIGHT STATS */}
          <div className="flex items-center gap-8">

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900">
                {cart.length}
              </p>
              <p className="text-[11px] uppercase tracking-[3px] text-gray-400">
                Items
              </p>
            </div>

            <div className="w-px h-10 bg-gray-200"></div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900">
                ${totalPrice}
              </p>
              <p className="text-[11px] uppercase tracking-[3px] text-gray-400">
                Total
              </p>
            </div>

            <div className="w-px h-10 bg-gray-200"></div>

            <div className="text-center">
              <p className="text-xl font-semibold text-green-600">
                Free
              </p>
              <p className="text-[11px] uppercase tracking-[3px] text-gray-400">
                Shipping
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ================= EMPTY STATE ================= */}
      {cart.length === 0 ? (
        <div className="text-center py-24 text-gray-400 text-lg">
          Your cart is empty 🛍️
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= LEFT CART ITEMS ================= */}
          <div className="lg:col-span-2 space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-200 rounded-3xl p-5 flex items-center gap-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition"
              >

                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1">

                  <h2 className="text-[15px] font-medium text-gray-900 group-hover:text-orange-500 transition">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Price: ${item.price}
                  </p>

                  {/* QTY CONTROLS */}
                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() => decrementQty(item.id)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                    >
                      <FaMinus className="text-xs text-gray-600" />
                    </button>

                    <span className="text-sm font-semibold text-gray-900">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => incrementQty(item.id)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                    >
                      <FaPlus className="text-xs text-gray-600" />
                    </button>

                  </div>
                </div>

                {/* PRICE + REMOVE */}
                <div className="text-right flex flex-col items-end gap-4">

                  <p className="text-lg font-semibold text-gray-900">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-1 text-xs uppercase tracking-[2px] text-red-500 hover:text-red-600 transition"
                  >
                    <FaTrash />
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* ================= RIGHT SUMMARY ================= */}
          <div className="lg:sticky lg:top-10 h-fit">

            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">

              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm text-gray-600">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-medium">
                    ${totalPrice}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>

              </div>

              {/* CHECKOUT */}
              <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-2xl text-sm font-semibold tracking-[2px] uppercase hover:bg-orange-600 transition">
                Checkout
              </button>

              {/* CLEAR CART */}
              <button
                onClick={clearCart}
                className="mt-3 w-full border border-gray-200 text-gray-700 py-2 rounded-2xl text-sm hover:bg-gray-50 transition"
              >
                Clear Cart
              </button>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartPage;