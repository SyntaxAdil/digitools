import { Suspense, use, useState } from "react";
import Header from "./../components/header/Header";
import ToolsSectionCard from "./../components/ui/ToolsSectionCard";

const ProductGrid = ({ productData }) => {
  const products = use(productData);
  return (
    <div className="py-4 mt-8 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ToolsSectionCard key={product.id} product={product} />
      ))}
    </div>
  );
};
const ToolsSection = ({ productData }) => {
  const [selectBtn, setSelectBtn] = useState("products");
  return (
    <section className=" md:py-4">
      <Header
        title={"Premium Digital Tools"}
        subtitle={
          "Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
        }
      />

      <div className="w-62 border border-[#F6F6F6] rounded-full flex mx-auto">
        <button
          className={`flex-1  rounded-full  font-semibold py-2 ${selectBtn === "products" ? "bg-custom-gradient text-white" : "bg-transparent text-[#25065D]"} cursor-pointer`}
          onClick={() => setSelectBtn("products")}
        >
          Products
        </button>
        <button
          className={`flex-1  rounded-full  font-semibold py-2 ${selectBtn === "cart" ? "bg-custom-gradient text-white" : "bg-transparent text-[#25065D]"} cursor-pointer`}
          onClick={() => setSelectBtn("cart")}
        >
          Cart
        </button>
      </div>

      <Suspense fallback={<span>Loading...</span>}>
        <ProductGrid productData={productData} />
      </Suspense>
    </section>
  );
};

export default ToolsSection;
