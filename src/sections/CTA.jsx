import React from "react";

const CTA = () => {
  return (
    <section className="bg-custom-gradient py-15 md:py-30 md:text-center px-4 text-white">
      <h1 className="text-3xl md:text-[40px] font-extrabold mb-6">Ready To Transform Your Workflow?</h1>
      <p className="text-sm"  >
        Join thousands of professionals who are already using Digitools to work
        smarter. <br className="hidden md:block" /> Start your free trial today.
      </p>

      <div className="space-x-4 my-8" >
        <a
          href="#"
          className="transition-all duration-150  hover:-translate-y-1.5 inline-block px-4 py-2 rounded-full bg-white "
        >
          <span className="text-transparent bg-custom-gradient bg-clip-text text-sm font-medium">
            Explore Products
          </span>
        </a>
        <a
          href="#"
          className="transition-all duration-150 hover:bg-white hover:text-[#7624f8] hover:-translate-y-1.5 inline-block px-4 py-2 rounded-full border border-white text-sm  font-medium"
        >
          View Pricing
        </a>
      </div>
      <p className=" text-[12px] md:text-sm">14-day free trial • No credit card required • Cancel anytime</p>
    </section>
  );
};

export default CTA;
