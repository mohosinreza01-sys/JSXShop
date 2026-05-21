import { useMemo, useState, useEffect } from "react";
import products from "../data/product";
import { FaFire, FaTag } from "react-icons/fa";
import { FaGift, FaMoon, FaStar, FaShippingFast } from "react-icons/fa";

/* ================= LIVE COUNTDOWN HOOK ================= */
const useCountdown = (targetDate) => {
    const [time, setTime] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const diff = target - now;

            if (diff <= 0) return;

            setTime({
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return time;
};

const tabs = ["All", "Hot Deals", "Flash Sale", "Best Deals"];

const DealsPage = () => {
    const [active, setActive] = useState("All");

    /* ================= EID COUNTDOWN ================= */
    const time = useCountdown("2026-04-10T00:00:00");

    const filtered = useMemo(() => {
        let data = [...products];

        if (active === "Hot Deals") {
            data = data.filter((p) => p.price < 500);
        }

        if (active === "Flash Sale") {
            data = data.filter((p) => p.price < 300);
        }

        if (active === "Best Deals") {
            data = data.filter((p) => p.price < 800);
        }

        return data;
    }, [active]);

    return (
        <section className="min-h-screen bg-[#fafafa] py-10 px-4 sm:px-6">

            <div className="max-w-7xl mx-auto">
                {/* ================= MODERN EID GLASS HERO ================= */}
                {/* ================= SLIM EID HERO ================= */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#0f172a] px-6 sm:px-10 py-8 mb-6">

                    {/* glow */}
                    <div className="absolute top-0 right-0 w-56 h-56 bg-orange-500/20 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-500/10 blur-3xl rounded-full"></div>

                    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                        {/* LEFT */}
                        <div className="max-w-xl">

                            {/* badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] uppercase tracking-[3px] text-orange-300">
                                <FaMoon className="text-[10px]" />
                                Eid Exclusive
                            </div>

                            {/* title */}
                            <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-white">
                                Premium <span className="text-orange-400">Tech Deals</span>
                                <br />
                                For This Eid
                            </h1>

                            {/* subtitle */}
                            <p className="mt-3 text-sm text-gray-300 leading-7 max-w-md">
                                Smart gadgets, electronics & lifestyle essentials with exclusive festive discounts.
                            </p>

                            {/* action */}
                            <div className="mt-5 flex items-center gap-4">

                                <button className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-sm font-medium text-white">
                                    Shop Now
                                </button>

                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <FaGift className="text-emerald-400" />
                                    Up to <span className="font-semibold text-white">70% OFF</span>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 min-w-[260px]">

                            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[3px] text-orange-300">
                                <FaFire />
                                Countdown
                            </div>

                            <div className="mt-4 flex items-center justify-center gap-3">

                                {[
                                    { label: "H", value: time.hours || 0 },
                                    { label: "M", value: time.minutes || 0 },
                                    { label: "S", value: time.seconds || 0 },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-16 rounded-xl bg-white/5 border border-white/10 py-3 text-center"
                                    >
                                        <h2 className="text-xl font-bold text-white">
                                            {String(item.value).padStart(2, "0")}
                                        </h2>

                                        <p className="text-[10px] text-gray-400 mt-1">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>
                </div>

                {/* ================= FILTER TABS ================= */}
                <div className="flex flex-wrap gap-3 mb-10">

                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-5 py-2 rounded-full text-[12px] uppercase tracking-[2px] font-semibold border transition ${active === tab
                                ? "bg-orange-500 text-white border-orange-500"
                                : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ================= PRODUCT GRID ================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {filtered.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden hover:border-orange-400 transition hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                        >

                            {/* IMAGE */}
                            <div className="relative overflow-hidden bg-gray-100">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                                />

                                {/* DISCOUNT BADGE */}
                                <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full flex items-center gap-1">
                                    <FaTag />
                                    EID OFFER
                                </div>

                            </div>

                            {/* CONTENT */}
                            <div className="p-5">

                                <p className="text-[11px] uppercase tracking-[3px] text-gray-400">
                                    Limited Eid Deal
                                </p>

                                <h2 className="text-[15px] font-medium text-gray-900 mt-2 line-clamp-2 group-hover:text-orange-500 transition">
                                    {product.name}
                                </h2>

                                {/* PRICE */}
                                <div className="mt-4">

                                    <p className="text-sm text-gray-400 line-through">
                                        ${(product.price + 100).toFixed(0)}
                                    </p>

                                    <p className="text-xl font-semibold text-gray-900">
                                        ${product.price}
                                    </p>

                                </div>

                                {/* BUTTON */}
                                <button className="mt-5 w-full py-2.5 rounded-xl bg-orange-500 text-white text-[12px] uppercase tracking-[2px] font-semibold hover:bg-orange-600 transition">
                                    Grab Eid Deal
                                </button>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default DealsPage;