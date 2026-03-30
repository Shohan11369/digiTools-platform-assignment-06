import React from "react";

const Starts = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6  md:p-10">
      <div className="flex justify-evenly gap-5">
        {/* 1st */}
        <div className="flex items-center gap-3">
          <div className="text-white px-4">
            <h2>50K+</h2>
            <p>Active Users</p>
          </div>
          <div className="w-px bg-white/50 h-10"></div>
        </div>
        {/* 2nd */}
        <div className="flex items-center gap-3">
          <div className="text-white px-4">
            <h2>50K+</h2>
            <p>Active Users</p>
          </div>
          <div className="w-px bg-white/50 h-10"></div>
        </div>
        {/* 3rd */}
        <div className="flex items-center gap-3">
          <div className="text-white px-4">
            <h2>50K+</h2>
            <p>Active Users</p>
          </div>
          <div className="w-px bg-white/50 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Starts;
