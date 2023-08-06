import React from "react";

const Header = () => {
  return (
    <div className="absolute w-full h-16 bg-blue-500 z-50 ">
      <ul className="flex justify-center items-center h-full text-white font-mono  ">
        <a href="/">
          <li className="hover:text-[#ff9f1a] duration-300 pl-3 ">Home</li>
        </a>
        <a href="https://github.com/LilDre7" target="_blank">
          <li className="hover:text-[#ff9f1a] duration-300 pl-3  ">GitHub</li>
        </a>
        <a
          href="https://www.linkedin.com/in/alvaro-aburto-dev/"
          target="_blank"
        >
          <li className="hover:text-[#ff9f1a] duration-300 pl-3  ">LinkedIn</li>
        </a>
        <a href="https://lilmiporfolio.netlify.app/" target="_blank">
          <li className="hover:text-[#ff9f1a] duration-300 pl-3  ">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
