import React from "react";
import BannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="relative min-h-60 flex items-center overflow-hidden bg-slate-50 px-4 lg:px-20 py-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* right */}
          <div className="space-y-6 text-center md:text-start">
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#4F39F6] text-sm font-bold px-4 py-2 rounded-full">
              ✨ Frontier AI Marketplace
            </div>
            <h1 className="text-3xl lg:text-4xl font-black leading-tight">
              One Subscription. <br />
              <span className="">All the AIs You Need</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Experience the full spectrum of frontier intelligence. Advanced AI
              models, unified under a single, powerful platform.
            </p>

            {/* button */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-lg text-white rounded-2xl px-5 md:px-10 shadow-lg shadow-red-200">
                Explore Products
              </button>

              <button className="btn w-full btn-lg text-black rounded-2xl px-5 md:px-10 shadow-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* left */}
          <div className="flex justify-center lg:justify-end">
            <img
              className="h-100 w-auto drop-shadow-2xl animate-pulse rounded-3xl"
              src={BannerImg}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
