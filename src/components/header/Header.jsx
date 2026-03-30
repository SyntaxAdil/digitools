import React from "react";

const Header = ({title,subtitle}) => {
  return (
    <div className="mx-auto max-w-xl my-8 space-y-4 text-center">
      <h1 className="text-5xl font-extrabold  ">
        {title}
      </h1>
      <p className="text-gray-500 px-4">
        {subtitle}
      </p>
    </div>
  );
};

export default Header;
