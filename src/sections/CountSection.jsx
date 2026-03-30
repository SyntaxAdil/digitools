import React from "react";

const CountSection = () => {
  return (
    <section className=" py-20 bg-custom-gradient text-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-3">
        <div className="border-r w-100 text-center ">
          <h2 className="text-6xl mb-4 font-black">50K+</h2>
          <p className="text-lg font-medium">Active Users</p>
        </div>

        <div className="border-r w-100 text-center">
          <h2 className="text-6xl mb-4 font-black">200+</h2>
          <p className="text-lg font-medium">Premium Tools</p>
        </div>

        <div className=" w-100 text-center">
          <h2 className="mb-4 font-black text-6xl">4.9</h2>
          <p className="text-lg font-medium">Ratins</p>
        </div>
      </div>
    </section>
  );
};

export default CountSection;
