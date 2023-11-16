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
    <nav className="fixed flex w-full items-center justify-between bg-white px-3 py-4 md:pt-8">
      <div className=" flex w-full items-center space-x-3 md:space-x-8">
        <img src={projectImages.logo} alt="" />
        {["Features", "Pricing", "Resourses"].map((button, i) => (
          <a
            key={i}
            href="#"
            className="hover:text-darkViolet hidden font-bold text-gray-200 duration-100 sm:block"
          >
            {button}
          </a>
        ))}
      </div>
      <div className="-z-10 hidden w-full space-x-3 text-right sm:block md:space-x-8">
        <a
          href="#"
          className="hover:text-darkViolet font-bold text-gray-200 duration-100"
        >
          Login
        </a>
        <a className="btn-cta rounded-full">Sign Up</a>
      </div>
      <button
        className="text-darkViolet block text-3xl sm:hidden"
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
      className={`fixed left-0 top-14 z-50 w-full bg-transparent px-3 duration-300 sm:hidden ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="bg-darkViolet flex flex-col gap-6 rounded-xl py-6 text-center text-lg">
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
