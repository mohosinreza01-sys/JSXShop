import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiGrid,
  FiFilter,
} from "react-icons/fi";
import { FaEye, FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import products from "../data/product";

const categories = [
  "All",
  "Laptop",
  "Phone",
  "Headphone",
  "Watch",
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // FILTER + SEARCH + SORT
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // search
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    // category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    // sorting
    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [search, selectedCategory, sort]);

  return (
    <section className="min-h-screen bg-[#fafafa] py-10 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-6 py-10 sm:px-10">

            {/* soft glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-100 blur-3xl rounded-full"></div>

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              {/* LEFT TEXT */}
              <div className="max-w-xl">

                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[4px] text-orange-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Premium Store
                </span>

                <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
                  Discover Premium <br />
                  Electronics Collection
                </h1>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Modern gadgets, smart devices & accessories crafted for performance.
                </p>
              </div>

              {/* SEARCH BOX */}
              <div className="w-full lg:w-[380px]">

                <div className="relative">

                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full h-12 pl-11 pr-4 rounded-2xl border border-gray-200 bg-gray-50 text-sm outline-none focus:bg-white focus:border-orange-400 transition"
                  />

                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-2 rounded-xl transition">
                    Search
                  </button>

                </div>

                <p className="text-[11px] text-gray-400 mt-2 pl-1">
                  Try: laptop, phone, headphone...
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="bg-white border border-gray-200 rounded-[28px] p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">

          {/* CATEGORY */}
          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mr-2">
              <FiFilter />
              Categories
            </div>

            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[12px] uppercase tracking-[2px] font-semibold transition-all duration-300 ${selectedCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SORT */}
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FiGrid />
              Sort By
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm outline-none"
            >
              <option value="default">Default</option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
            </select>
          </div>
        </div>

        {/* RESULT */}
        <div className="flex items-center justify-between mb-6">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden hover:border-orange-400 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden bg-gray-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                {/* BADGE */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-semibold tracking-[2px] uppercase px-3 py-1.5 rounded-full text-gray-800 border border-gray-200">
                  Sale
                </span>

                {/* ACTION BUTTONS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">

                  <Link
                    to={`/product/${product.id}`}
                    className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition"
                  >
                    <FaEye className="text-sm" />
                  </Link>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition"
                  >
                    <FiShoppingBag className="text-sm" />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* CATEGORY */}
                <p className="text-[11px] uppercase tracking-[3px] text-gray-400 mb-2">
                  {product.category}
                </p>

                {/* TITLE */}
                <h2 className="text-[15px] font-medium text-gray-900 leading-6 line-clamp-2 group-hover:text-orange-500 transition">
                  {product.name}
                </h2>

                {/* RATING */}
                <div className="flex items-center gap-1 mt-3 text-orange-400 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  <span className="text-gray-400 ml-2">
                    (4.9)
                  </span>
                </div>

                {/* PRICE */}
                <div className="flex items-center justify-between mt-5">

                  <div>
                    <p className="text-[13px] text-gray-400 line-through">
                      ${(product.price + 80).toFixed(0)}
                    </p>

                    <p className="text-xl font-semibold text-gray-900">
                      ${product.price}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 rounded-full border border-gray-200 text-[11px] uppercase tracking-[2px] font-semibold text-gray-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Shop;