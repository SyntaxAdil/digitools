import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/Hero";
import CountSection from "./sections/CountSection";
import Wrapper from "./wrapper/Wrapper";
import ToolsSection from "./sections/ToolsSection";
import { useEffect, useState } from "react";
import { toast, ToastContainer, Zoom } from "react-toastify";
import GetStarted from "./sections/GetStarted";
const fetchProductData = async () => {
  const res = (await fetch("/data.json")).json();
  return res;
};

const productData = fetchProductData();
const App = () => {
  const [cartItem, setCartItem] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItem");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (item) => {
    if (!item) return;

    setCartItem((prev) => [...prev, item]);

    toast.success("Product add to cart successfully");
  };
  const removeItem = (item) => {
    if (!item) return;
    setCartItem((prev) => prev.filter((i) => i.id !== item.id));
    toast.success("Product removed successfully");
  };

  const checkOut = () => {
    setCartItem([]);
    toast.success("Checkout successfully");
  };
  return (
    <>
      <Navbar cartItem={cartItem} />
      <Wrapper>
        <Hero />
      </Wrapper>
      <CountSection />
      <Wrapper>
        <ToolsSection
          cartItem={cartItem}
          removeItem={removeItem}
          productData={productData}
          addToCart={addToCart}
          checkOut={checkOut}
        />
      </Wrapper>
      <GetStarted />
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        theme="light"
        transition={Zoom}
      />
    </>
  );
};

export default App;
