import React from "react";

const CartSectionCard = ({ cart, removeItem }) => {
  return (
    <div className="py-4 px-2 md:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-md bg-[#f9fafc] my-4">
      <div className="flex  items-center gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#F2F2F2] flex items-center justify-center shrink-0">
          <img src={cart.icon} alt={cart.name} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
        </div>

        <div>
          <h2 className="text-md sm:text-lg md:text-xl font-bold">
            {cart.name}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            ${cart.price}
          </p>
        </div>
      </div>

      <button
        onClick={() => removeItem(cart)}
        className="text-error cursor-pointer font-bold text-sm sm:text-base self-end sm:self-auto mr-4"
      >
        Remove
      </button>
    </div>
  );
};

export default CartSectionCard;