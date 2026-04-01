import { Play } from "lucide-react";
import CustomButton from "./../components/ui/CustomButton";
import HERO_IMAGE from "../assets/banner.png"
const Hero = () => {
  return (
    <section className="py-15 md:py-21 grid grid-cols-1 md:grid-cols-2  items-center md:ps-4">
      {/* left side */}
      <div className="space-y-3 md:space-y-5">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full w-fit bg-[#e1e7ff]">
          <div className="flex items-center justify-center">
            <span className="w-2.5 h-2.5 inline-block rounded-full animate-pulse absolute z-2 bg-custom-gradient "></span>
            {/* <span className="w-3 h-3 inline-block rounded-full absolute z-1 bg-[#a274e8] "></span>
            <span className="w-4 h-4 inline-block rounded-full absolute bg-[#d0befe] "></span> */}
          </div>
          <p className="font-semibold bg-custom-gradient text-transparent bg-clip-text">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h1 className="leading-20 text-[55px] md:text-6xl font-black">
          Supercharge Your <span className="bg-custom-gradient text-transparent bg-clip-text" >Digital Workflow</span>
        </h1>
        <p className="text-md md:text-lg text-gray-500">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
          <br />
          Explore Products
        </p>

        <div className="flex items-center gap-4 mt-8">
          <CustomButton>Explore Products</CustomButton>
          <CustomButton invertBg>
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 group"
              fill="none"
              strokeWidth="3"
            >
              <defs>
                <linearGradient id="playGradient">
                  <stop offset="0%" stopColor="#4F39F6" />
                  <stop offset="100%" stopColor="#9514FA" />
                </linearGradient>
              </defs>

              <path
                d="M6 4 Q6 3 7 3 L18 11 Q19 12 18 13 L7 21 Q6 21 6 20 Z"
                stroke="url(#playGradient)"
                fill="none"
                className="group-hover:stroke-white transition-all duration-300"
              />
            </svg>
            Watch Demo
          </CustomButton>
        </div>
      </div>

      <div className="hidden md:block" >

        <img src={HERO_IMAGE} alt="hero image" className="max-w-100   hover:-translate-y-2 transition-all duration-150 mx-auto" />

      </div>
    </section>
  );
};

export default Hero;
