import { useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
 
  return (
    <div
      className={`fixed w-full top-0 z-[100] backdrop-blur-md  text-white pt-10 px-10 lg:px-14 xl:px-20 2xl:px-32 transition-all `}
    >
      <div

        className={`flex flex-col lg:flex-row justify-between items-start gap-10 `}
      >
        <div className="flex justify-between items-center w-full lg:w-60">
        {/* Left Side: Email */}
          <div className="flex lg:flex-row items-center gap-3 sm:gap-5">
            {/* <Mail /> */}
            <a
              href="/"
              className="text-sm sm:text-base md:text-4xl"
            >
              ☀️
            </a>
          </div>
          {/* Hamburger Menu Button (visible on small screens) */}

          <div className="lg:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="hidden lg:flex">
          <ul className="flex gap-5 sm:gap-8 lg:gap-12 xl:gap-14 text-sm sm:text-sm md:text-base lg:text-base">
            <li className="hover:underline hover:pb-[1px]">
              <ScrollLink to="about-me" smooth={true} duration={500}>
                About Me
              </ScrollLink>
            </li>
            <li className="hover:underline hover:pb-[1px]">
              <ScrollLink to="my-journey" smooth={true} duration={500}>
                My Journey
              </ScrollLink>
            </li>
            <li className="hover:underline hover:pb-[1px]">
              <ScrollLink to="my-projects" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </li>
            <li className="hover:underline hover:pb-[1px]">
              <ScrollLink to="tech-stack" smooth={true} duration={500}>
                My Tech Stacks
              </ScrollLink>
            </li>
            <li className="hover:underline hover:pb-[1px]">
              <ScrollLink to="top-picks" smooth={true} duration={500}>
                My Picks
              </ScrollLink>
            </li>
            
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-5 ">
            <ul className="flex flex-col  gap-2 text-sm sm:text-base">
              <li className="hover:underline hover:pb-[1px]">
                <ScrollLink to="about-me" smooth={true} duration={500}>
                  About Me
                </ScrollLink>
              </li>
              <li className="hover:underline hover:pb-[1px]">
                <ScrollLink to="my-journey" smooth={true} duration={500}>
                  My Journey
                </ScrollLink>
              </li>
              <li className="hover:underline hover:pb-[1px]">
                <ScrollLink to="my-projects" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </li>
              <li className="hover:underline hover:pb-[1px]">
                <ScrollLink to="tech-stack" smooth={true} duration={500}>
                My Tech Stacks
                </ScrollLink>
              </li>
              <li className="hover:underline hover:pb-[1px]">
                <Link to="top-picks" smooth={true} duration={500}>
                My Picks
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
