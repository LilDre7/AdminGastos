import React from "react";
import { useState } from "react";

const Menu = () => {
  // Hacer un menu responsive
  const [isNavbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!isNavbar);
    console.log(isNavbar);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[60px] sm:mx-auto bg-[#f4ede400] opacity-[10px] transition-all duration-200 ease-in-out p-2 ">
      <i
        onClick={handleClick}
        className="bx bx-menu md:hidden cursor-pointer z-50 bg-slate-400/25 p-2 rounded-[3px] text-xl"
      ></i>
      <nav
        className={`text-white absolute top-full z-50 ${
          isNavbar ? "left-0 z-50 min-h-screen dark:text-white" : "-left-full"
        } duration-300 flex flex-col gap-5 font-[600] text-black bg-[#f4ede4] min-h-screen w-full justify-center items-center text-3xl md:static md:flex md:flex-row md:gap-10 md:w-auto md:min-h-0 md:bg-transparent md:dark:md:bg-transparent dark:bg-[#0b0b0bf8] md:jus md:text-base md:items-center md:text-black md:p-0 }`}
      >
        <ul className="flex justify-center items-center flex-col mt-[-7rem] ">
          <a href="/">
            <li className="hover:text-[#ff9f1a] duration-300 p-10 ">Home</li>
          </a>
          <a href="https://github.com/LilDre7" target="_blank">
            <li className="hover:text-[#ff9f1a] duration-300 p-10 ">GitHub</li>
          </a>
          <a
            href="https://www.linkedin.com/in/alvaro-aburto-dev/"
            target="_blank"
          >
            <li className="hover:text-[#ff9f1a] duration-300 p-10 ">
              LinkedIn
            </li>
          </a>
          <a href="https://lilmiporfolio.netlify.app/" target="_blank">
            <li className="hover:text-[#ff9f1a] duration-300 p-10 ">Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
