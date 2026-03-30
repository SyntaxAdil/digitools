import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/Hero";
import CountSection from "./sections/CountSection";
import Wrapper from "./wrapper/Wrapper";
import ToolsSection from "./sections/ToolsSection";

const fetchProductData = async () => {
  const res = (await fetch("/data.json")).json();
  return res;
};

const productData = fetchProductData();
const App = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero />
      </Wrapper>
      <CountSection />
      <Wrapper>
        <ToolsSection productData={productData} />
      </Wrapper>
    </>
  );
};

export default App;
