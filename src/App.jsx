import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from './sections/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20 max-w-300 mx-auto space-y-10 px-4 md:px-0">
        <Hero/>
      </main>
    </>
  );
};

export default App;
