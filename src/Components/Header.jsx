import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { isMobile, getTouchTargetSize, debounce } from "../utils/mobileUtils";
import { spacingClasses } from "../utils/spacingUtils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("landing-page");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const headerRef = useRef(null);

  // Check if device is mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobileDevice(isMobile());
    checkMobile();
    window.addEventListener('resize', debounce(checkMobile, 250));
    return () => window.removeEventListener('resize', debounce(checkMobile, 250));
  }, []);

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = debounce(() => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = ["landing-page", "about-me", "my-journey", "experience", "my-projects", "tech-stack", "top-picks", "connect"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Me", to: "about-me", id: "about-me" },
    { name: "Experience", to: "experience", id: "experience" },
    { name: "Projects", to: "my-projects", id: "my-projects" },
    { name: "My Tech Stacks", to: "tech-stack", id: "tech-stack" },
    { name: "My Picks", to: "top-picks", id: "top-picks" },
  ];

  return (
    <motion.div
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-[100] backdrop-blur-md text-white transition-all duration-300 ${
        scrolled 
          ? "pt-4 px-container sm:px-container-lg lg:px-container-xl bg-black/80 shadow-lg" 
          : "pt-6 sm:pt-10 px-container sm:px-container-lg lg:px-container-xl bg-transparent"
      }`}
      style={{ 
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="flex justify-between items-center w-full lg:w-60">
          {/* Logo */}
          <motion.div 
            className="flex lg:flex-row items-center gap-3 sm:gap-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="/"
              className="text-4xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              ☀️
            </motion.a>
          </motion.div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <motion.button
              className="focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                minHeight: `${getTouchTargetSize()}px`, 
                minWidth: `${getTouchTargetSize()}px`,
                padding: '8px'
              }}
              aria-label="Toggle navigation menu"
            >
              <motion.div
                animate={menuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-white block mb-1.5"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-white block mb-1.5"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-white block"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ul className="flex gap-4 sm:gap-6 lg:gap-8 xl:gap-10 text-sm sm:text-sm md:text-base lg:text-base">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -2,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <ScrollLink 
                  to={item.to} 
                  smooth={true} 
                  duration={500}
                  className={`cursor-pointer relative transition-colors duration-300 ${
                    activeSection === item.id 
                      ? "text-cyan-400 font-semibold" 
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  {item.name}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 ${
                      activeSection === item.id ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Active indicator dot */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-5 w-full"
            >
              <motion.ul 
                className="flex flex-col gap-2 sm:gap-4 text-sm sm:text-base bg-black/90 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{ 
                  touchAction: 'pan-y',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`transition-colors ${
                      activeSection === item.id 
                        ? "text-cyan-400 font-semibold" 
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    <ScrollLink 
                      to={item.to} 
                      smooth={true} 
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer block py-3 sm:py-2 flex items-center"
                      style={{ 
                        minHeight: `${getTouchTargetSize()}px`,
                        paddingLeft: '12px',
                        paddingRight: '12px'
                      }}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <motion.div
                          className="ml-2 w-2 h-2 bg-cyan-400 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </ScrollLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Header;
