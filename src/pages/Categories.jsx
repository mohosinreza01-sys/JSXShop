import { useMemo, useState } from "react";
import products from "../data/product";
import { FiSearch } from "react-icons/fi";

const categories = ["All", "Laptop", "Phone", "Headphone", "Watch"];

const CategoryPage = () => {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filtered = useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (activeCat !== "All") {
      data = data.filter((p) => p.category === activeCat);
    }

    return data;
  }, [search, activeCat]);

  return (
    <section className="bg-[#fafafa] min-h-screen py-10 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="w-full lg:w-[300px] lg:sticky lg:top-6 h-fit">

          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">

            {/* TITLE */}
            <h2 className="text-lg font-semibold text-gray-900 mb-5">
              Filters
            </h2>

            {/* SEARCH */}
            <div className="relative mb-6">

              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full h-11 pl-10 pr-4 rounded-2xl border border-gray-200 bg-gray-50 text-sm outline-none focus:bg-white focus:border-orange-400 transition"
              />
            </div>

            {/* CATEGORY */}
            <div className="mb-6">

              <p className="text-[11px] uppercase tracking-[4px] text-gray-400 mb-3">
                Category
              </p>

              <div className="space-y-2">

                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                      activeCat === cat
                        ? "bg-orange-500 text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    {cat}
                  </button>
                ))}

              </div>
            </div>

            {/* INFO BOX */}
            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
              <p className="text-xs text-gray-600 leading-5">
                🔥 Premium deals updated daily. Limited stock products available.
              </p>
            </div>

          </div>
        </aside>

        {/* ================= RIGHT PRODUCTS ================= */}
        <div className="flex-1">

          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">
              Products
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Showing <span className="font-medium text-gray-900">{filtered.length}</span> items
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden hover:border-orange-400 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              >

                {/* IMAGE */}
                <div className="overflow-hidden bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <p className="text-[11px] uppercase tracking-[3px] text-gray-400">
                    {product.category}
                  </p>

                  <h2 className="text-[15px] font-medium text-gray-900 mt-2 line-clamp-2 group-hover:text-orange-500 transition">
                    {product.name}
                  </h2>

                  <div className="flex items-center justify-between mt-5">

                    <p className="text-xl font-semibold text-gray-900">
                      ${product.price}
                    </p>

                    <button className="px-4 py-2 rounded-full border border-gray-200 text-[11px] uppercase tracking-[2px] font-semibold text-gray-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition">
                      View
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CategoryPage;