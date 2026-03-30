import React from "react";
import Header from "./../components/header/Header";
import Wrapper from "./../wrapper/Wrapper";
import userImage from "../assets/user.png";
import packageImage from "../assets/package.png";
import rocketImage from "../assets/rocket.png";
const getStartedContent = [
  {
    id: 1,
    img: userImage,
    title: "Create Account",
    subtitle:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: 2,
    img: packageImage,
    title: "Choose Products",
    subtitle: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: 3,
    img: rocketImage,
    title: "Start Creating",
    subtitle: "Download and start using your premium tools immediately.",
  },
];

const GetStarted = () => {
  return (
    <section className="bg-[#f9fafc] py-12 md:py-20 ">
      <Wrapper>
        <Header
          title={"Get Started in 3 Steps"}
          subtitle={"Start using premium digital tools in minutes, not hours."}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
          {getStartedContent.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-purple-500 min-h-95 justify-center relative"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#f4e8fe] flex items-center justify-center mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <h4 className="font-bold text-xl md:text-2xl mb-2">
                {item.title}
              </h4>

              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {item.subtitle}
              </p>
              <span className="w-10 h-10  bg-custom-gradient flex items-center justify-center text-white rounded-full absolute top-4 right-4" >{item.id}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default GetStarted;
