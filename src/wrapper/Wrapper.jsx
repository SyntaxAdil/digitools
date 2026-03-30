import React from "react";

const Wrapper = ({ children }) => {
  return (
    <main className="mt-20 max-w-300 mx-auto space-y-10 px-4 md:px-0">
      {children}
    </main>
  );
};

export default Wrapper;
