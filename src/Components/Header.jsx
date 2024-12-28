import { useState, useEffect } from "react";
// import Mail from "../assets/Mail"; // Assuming Mail is your logo or icon
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [colorChange, setColorChange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  // Change navbar background color on scroll
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-[100] backdrop-blur-md text-white pt-14 sm:pt-16 md:pt-20 lg:pt-24 px-10 lg:px-14 xl:px-20 2xl:px-32 transition-all ${
        colorChange ? "hidden" : "block"
      }`}
    >
      <div

        className={`flex flex-col lg:flex-row justify-between items-start gap-10 `}
      >
        <div className="flex justify-between items-center w-full lg:w-60">
        {/* Left Side: Email */}
          <div className="flex lg:flex-row items-center gap-3 sm:gap-5">
            {/* <Mail /> */}
            <a
              href="mailto:attul.sreenath@gmail.com"
              className="text-sm sm:text-base md:text-lg"
            >
              attul.sreenath@gmail.com
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
              <Link to="/" smooth={true} duration={500}>
                About Me
              </Link>
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
              <ScrollLink to="top-picks" smooth={true} duration={500}>
                My Picks
              </ScrollLink>
            </li>
            <li className="hover:underline hover:pb-[1px]">
              <Link to="/blogs" smooth={true} duration={500}>
                Blogs
              </Link>
            </li>
            <li className="hover:underline hover:pb-[1px]">
              <ScrollLink to="mentorship" smooth={true} duration={500}>
                Mentorship & Community
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-5">
            <ul className="flex flex-col items-start gap-2 text-sm sm:text-base">
              <li className="hover:underline hover:pb-[1px]">
                <Link to="/" smooth={true} duration={500}>
                  About Me
                </Link>
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
                <ScrollLink to="top-picks" smooth={true} duration={500}>
                  My Picks
                </ScrollLink>
              </li>
              <li className="hover:underline hover:pb-[1px]">
                <Link to="blogs" smooth={true} duration={500}>
                  Blogs
                </Link>
              </li>
              <li className="hover:underline hover:pb-[1px]">
                <ScrollLink to="mentorship" smooth={true} duration={500}>
                  Mentorship & Community
                </ScrollLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
