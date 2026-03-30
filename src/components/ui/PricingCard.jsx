import { Check } from "lucide-react";
import React from "react";
import CustomButton from "./CustomButton";

export const PricingCard = ({ product }) => {
  const isPopular = product.most_popular;

  return (
    <div
      className={`relative min-h-100 rounded-2xl p-6 flex flex-col justify-between shadow ${
        isPopular ? "bg-custom-gradient text-white" : "bg-[#f9fafc]"
      } transition-all duration-150 hover:-translate-y-1.5`}
    >
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

        <p
          className={`${isPopular ? "text-white/80" : "text-gray-500"} text-md mb-6`}
        >
          {product.tagline}
        </p>

        <div
          className={`${isPopular ? "text-white/80" : "text-gray-500"} capitalize`}
        >
          <span
            className={`${isPopular ? "text-white" : "text-black"} text-3xl font-extrabold`}
          >
            {product.price?.currency}
            {product.price?.amount}
          </span>
          /{product.price?.period}
        </div>

        <ul className="space-y-1 mt-4 mb-6">
          {product.features.map((f) => (
            <li
              key={f}
              className={`flex items-center gap-2 ${
                isPopular ? "text-white/90" : "text-[#627382]"
              }`}
            >
              <Check
                className={`${isPopular ? "text-white" : "text-[#30b868]"}`}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <CustomButton extraClass={`w-full  `} invertBg={isPopular}>
        {product.cta.label}
      </CustomButton>

      {isPopular && (
        <div
          className={`absolute bg-[#fef3c6] text-[#bb4d00] -top-3 text-sm left-1/2 -translate-x-1/2 px-4 py-1 font-medium rounded-full  `}
        >
          Most Popular
        </div>
      )}
    </div>
  );
};
