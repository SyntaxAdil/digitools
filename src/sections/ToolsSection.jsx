import { Suspense, use } from "react";
import Header from "./../components/header/Header";
import ToolsSectionCard from "./../components/ui/ToolsSectionCard";
import CustomButton from "./../components/ui/CustomButton";
import CartSectionCard from "../components/ui/CartSectionCard";
import ToolsSectionCardSkeleton from "./../components/loader/ToolsSectionCardSkeleton ";

const ProductGrid = ({ productData, addToCart, cartItem }) => {
  const products = use(productData);
  return (
    <div className="py-4 mt-8 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ToolsSectionCard
          cartItem={cartItem}
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};
const ToolsSection = ({
  productData,
  addToCart,
  cartItem,
  selectBtn,
  setSelectBtn,
  removeItem,
  checkOut,
}) => {
  return (
    <section
      className="pb-8 md:pt-4 md:pb-25 scroll-mt-25 md:scroll-mt-20"
      id="products"
    >
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
          Cart ({cartItem.length})
        </button>
      </div>

      {selectBtn === "products" ? (
        <Suspense fallback={<ToolsSectionCardSkeleton />}>
          <ProductGrid
            cartItem={cartItem}
            productData={productData}
            addToCart={addToCart}
          />
        </Suspense>
      ) : (
        <div className="rounded-md border border-[#F2F2F2] p-8 mt-16">
          <h3 className="text-2xl font-bold  mb-8">Your Cart</h3>
          {cartItem.length === 0 ? (
            <div className="bg-[#f9fafc] py-16 rounded-xl text-center flex flex-col items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 text-2xl">
                🛒
              </div>

              <h2 className="text-xl font-semibold text-gray-700">
                Your cart is empty
              </h2>

              <p className="text-gray-500 text-sm max-w-sm">
                Looks like you haven’t added anything yet. Start exploring our
                tools and add your favorites to the cart.
              </p>
            </div>
          ) : (
            <>
              {cartItem.map((cart) => (
                <CartSectionCard
                  key={cart.id}
                  cart={cart}
                  removeItem={removeItem}
                />
              ))}
            </>
          )}
          {cartItem.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between ">
                <h1 className="text-xl font-bold">Total:</h1>
                <span className="text-xl font-bold">
                  $ {cartItem.reduce((acc, val) => acc + val.price, 0)}
                </span>
              </div>
              <CustomButton
                onClick={() => checkOut()}
                extraClass="w-full py-2 mt-4"
              >
                Proceed to Checkout
              </CustomButton>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ToolsSection;
