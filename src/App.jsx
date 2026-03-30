import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/Hero";
import CountSection from "./sections/CountSection";
import Wrapper from "./wrapper/Wrapper";

const App = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero />
      </Wrapper>
      <CountSection />
      <Wrapper>
        
      </Wrapper>
    </>
  );
};

export default App;
