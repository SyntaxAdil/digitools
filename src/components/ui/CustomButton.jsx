import React from "react";

const CustomButton = ({
  onClick,
  children,
  extraClass = "",
  invertBg = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`  font-semibold bg-custom-gradient  rounded-full overflow-hidden p-px w-fit cursor-pointer group hover:-translate-y-1 transition-all duration-200 hover:shadow ${extraClass}  disabled:cursor-not-allowed`}
    >
      <div
        className={`w-full h-full group-hover:bg-transparent transition-all duration-200  px-4 rounded-full py-2  ${invertBg ? "bg-white " : "bg-custom-gradient"}  `}
      >
        <span
          className={`  ${invertBg ? "text-transparent bg-clip-text transition-all duration-200 group-hover:text-white bg-custom-gradient " : "text-white "} flex items-center gap-1 justify-center`}
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default CustomButton;
