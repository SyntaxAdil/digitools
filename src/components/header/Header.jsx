import React from "react";

const Header = ({ title, subtitle, fsTitle = "" }) => {
  return (
    <div className="mx-auto max-w-xl mb-8 space-y-4 text-center">
      <h1
        className={` font-extrabold  capitalize  ${fsTitle ? fsTitle : "text-3xl md:text-4xl"}`}
      >
        {title}
      </h1>
      <p className="text-gray-500 px-4 text-sm md:text-md">{subtitle}</p>
    </div>
  );
};

export default Header;
