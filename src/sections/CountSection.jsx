import React from "react";

const CountSection = () => {
  return (
    <section className="py-10 md:py-20 bg-custom-gradient text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-0">
          <div className="flex-1 text-center px-6 py-4">
            <h2 className="text-4xl md:text-5xl mb-2 font-black">50K+</h2>
            <p className="text-[13px] md:text-base font-medium">Active Users</p>
          </div>

          <div className="w-px h-16 bg-white/30" />

          <div className="flex-1 text-center px-6 py-4">
            <h2 className="text-4xl md:text-5xl mb-2 font-black">200+</h2>
            <p className="text-[13px] md:text-base font-medium">
              Premium Tools
            </p>
          </div>

          <div className="w-px h-16 bg-white/30" />

          <div className="flex-1 text-center px-6 py-4">
            <h2 className="text-4xl md:text-5xl mb-2 font-black">4.9</h2>
            <p className="text-[13px] md:text-base font-medium">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;
