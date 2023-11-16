/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { projectImages } from "../images/projectImages";
//
export default function Header() {
  //
  const [showSidebar, setShowSidebar] = useState(false);
  //
  return (
    <nav className="container relative flex w-full items-center justify-between p-3 sm:pt-8">
      <div className=" flex w-full items-center space-x-3 md:space-x-8">
        <img src={projectImages.logo} alt="" />
        {["Features", "Pricing", "Resourses"].map((button, i) => (
          <a
            key={i}
            href="#"
            className="hidden text-base font-bold text-gray-200 duration-100 hover:text-darkViolet max-md:text-sm sm:block"
          >
            {button}
          </a>
        ))}
      </div>
      <div className="hidden min-w-fit space-x-3 text-right text-base max-md:text-sm sm:block md:space-x-8">
        <a
          href="#"
          className="font-bold text-gray-200 duration-100 hover:text-darkViolet"
        >
          Login
        </a>
        <a className="btn-cta rounded-full">Sign Up</a>
      </div>
      <button
        className="block text-3xl text-darkViolet sm:hidden"
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        ☰
      </button>
      <MobileNav showSidebar={showSidebar} />
    </nav>
  );
}

function MobileNav({ showSidebar }) {
  return (
    <div
      className={`absolute left-0 top-full z-50 w-full origin-top-right bg-transparent px-3 duration-300 ease-in-out sm:hidden ${
        showSidebar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col gap-6 rounded-xl bg-darkViolet py-6 text-center text-lg">
        {["Features", "Pricing", "Resourses"].map((button, i) => (
          <a key={i} href="#" className="font-bold text-white duration-100">
            {button}
          </a>
        ))}
        <hr className="mx-auto w-9/12 text-gray-100" />
        <a href="#" className="font-bold text-white duration-100">
          Login
        </a>
        <a className="btn-cta mx-auto w-9/12 rounded-full">Sign Up</a>
      </div>
    </div>
  );
}
