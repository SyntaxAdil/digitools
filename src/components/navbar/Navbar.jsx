import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import CustomButton from "./../ui/CustomButton";

const NAV_LINKS = [
  { id: 1, link: "Products", href: "/products" },
  { id: 2, link: "Features", href: "/features" },
  { id: 3, link: "Pricing", href: "/pricing" },
  { id: 4, link: "Testimonials", href: "#testimonials" },
  { id: 5, link: "FAQ", href: "#faq" },
];

const Navbar = ({ cartItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = NAV_LINKS.map((links) => (
    <li key={links.id}>
      <a
        href={links.href}
        className="relative group transition-colors duration-200 hover:text-purple-600"
        onClick={() => setMenuOpen(false)}
      >
        {links.link}
        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full rounded-full" />
      </a>
    </li>
  ));

  return (
    <header className="shadow fixed left-0 top-0 right-0 z-40 bg-white">
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 max-w-7xl mx-auto">
        <h1 className="bg-custom-gradient text-transparent bg-clip-text text-2xl md:text-3xl font-extrabold py-1 select-none">
          DigiTools
        </h1>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks}
        </ul>

        <div className="hidden md:flex items-center gap-8">
          <div className="relative w-fit  hover:text-purple-600 transition-colors duration-200">
            <ShoppingCart />
            {cartItem.length>0 && <span className="w-5 h-5 text-white text-[12px] font-semibold absolute -right-2 -top-1.5 flex items-center justify-center rounded-full bg-red-500">
              {cartItem.length > 0 ? cartItem.length : ""}
            </span>}
          </div>

          <a
            href="#"
            className="relative group font-medium transition-colors duration-200 hover:text-purple-600"
          >
            Login
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full rounded-full" />
          </a>

          <CustomButton>Get Started</CustomButton>
        </div>

        <div className="flex md:hidden items-center gap-5">
          <div className="relative w-fit ">
            <ShoppingCart size={22} />
            {cartItem.length>0 && <span className="w-5 h-5 text-white text-[12px] font-semibold absolute -right-2 -top-1.5 flex items-center justify-center rounded-full bg-red-500">
              {cartItem.length > 0 ? cartItem.length : ""}
            </span>}
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="hover:text-purple-600 transition-colors duration-200"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white items-center text-center shadow-md px-6 py-5 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 font-medium">
            {NAV_LINKS.map((links) => (
              <li key={links.id}>
                <a
                  href={links.href}
                  className="block hover:text-purple-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {links.link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pt-2 ">
            <a
              href="#"
              className="font-medium hover:text-purple-600 transition-colors duration-200"
            >
              Login
            </a>

            <CustomButton>Get Started</CustomButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
