import React from "react";

const Starts = () => {
  return (
    <>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6 md:p-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-center  gap-4 md:gap-6">
          {/* 1st */}
          <div className="flex items-center gap-3">
            <div className="text-white text-center sm:text-left px-2">
              <h2 className="text-2xl md:text-3xl font-bold">50K+</h2>
              <p className="text-sm md:text-base">Active Users</p>
            </div>
            <div className="hidden sm:block w-px bg-white/50 h-10"></div>
          </div>
          {/* 2nd */}
          <div className="flex items-center gap-3">
            <div className="text-white text-center sm:text-left px-2">
              <h2 className="text-2xl md:text-3xl font-bold">200+</h2>
              <p className="text-sm md:text-base">Premium Tools</p>
            </div>
            <div className="hidden sm:block w-px bg-white/50 h-10"></div>
          </div>
          {/* 3rd */}
          <div className="flex items-center gap-3">
            <div className="text-white text-center sm:text-left px-2">
              <h2 className="text-2xl md:text-3xl font-bold">4.9</h2>
              <p className="text-sm md:text-base">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Starts;
