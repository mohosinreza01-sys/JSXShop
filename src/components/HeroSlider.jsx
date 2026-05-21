import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Premium Tech Deals",
    desc: "Discover top electronics with exclusive discounts this season",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    btn: "Shop Now",
  },
  {
    title: "New Arrivals 2026",
    desc: "Latest gadgets & smart devices for modern lifestyle",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    btn: "Explore",
  },
  {
    title: "Flash Sale Live",
    desc: "Limited time offers on premium electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    btn: "Grab Deals",
  },
];

export default function BannerSlider() {
  return (
    <div className="w-full h-[80vh] font-sans">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >

        {slides.map((item, i) => (
          <SwiperSlide key={i}>

            <div
              className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >

              {/* soft premium overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-3xl text-center px-6">

                {/* badge */}
                <div className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] uppercase tracking-[3px] backdrop-blur-md">
                  Premium Collection
                </div>

                {/* title */}
                <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
                  {item.title}
                </h1>

                {/* description */}
                <p className="mt-5 text-sm md:text-base text-white/80 leading-7">
                  {item.desc}
                </p>

                {/* button */}
                <button className="mt-8 px-7 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition">
                  {item.btn}
                </button>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}