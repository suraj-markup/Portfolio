import { motion } from "framer-motion";
import { Arrow, Arrow2 } from "../assets/Avatar";
import suraj from "../assets/suraj/suraj.webp";
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiLeetcode,SiCodechef } from "react-icons/si";
import bg from '../assets/bg.mp4';
import { isMobile, getTouchTargetSize, getMobileAnimationDelay } from "../utils/mobileUtils";
import { spacingClasses } from "../utils/spacingUtils";

const LandingPage = () => {
  const socialLinks = [
    { icon: <MdOutlineMail/>, href: "mailto:sk9261712674@gmail.com", label: "Email" },
    { icon: <SiLeetcode/>, href: "https://leetcode.com/u/suraj-markup/", label: "LeetCode" },
    { icon: <SiCodechef/>, href: "https://www.codechef.com/users/surajmarkup", label: "CodeChef" },
    { icon: <FaLinkedinIn/>, href: "https://www.linkedin.com/in/suraj-kumar-86217a20a/", label: "LinkedIn" },
    { icon: <FaGithub/>, href: "https://github.com/suraj-markup", label: "GitHub" },
    { icon: <FaXTwitter/>, href: "https://x.com/suraj_markup", label: "Twitter" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToNextSection = () => {
    const element = document.getElementById('about-me');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-no-repeat bg-center pt-1 -mt-10" id="landing-page">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="bg-vid absolute inset-0 h-full w-full bg-cover object-cover"
      > 
        <source src={bg} type="video/mp4" /> 
      </video>

      {/* Overlay Content */}
      <motion.div 
        className="relative z-10 flex flex-col justify-center items-center min-h-screen px-container sm:px-container-lg lg:px-container-xl pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="relative mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.img 
            src={suraj} 
            alt="profile photo" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20 shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        {/* Introduction Text */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-white my-2 text-center px-4"
          variants={textVariants}
        >
          Hola Amigo, I&apos;m{" "}
          <motion.span 
            className="text-2xl sm:text-3xl font-bold"
            variants={highlightVariants}
            whileHover={{ 
              scale: 1.1,
              textShadow: "0 0 20px rgba(255,255,255,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Suraj Kumar ✌️
          </motion.span>
        </motion.p>

        {/* Main Heading */}
        <motion.h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 sm:mb-5 text-white px-4 leading-tight"
          variants={textVariants}
        >
          I believe in building <br/> 
          <motion.span 
            className="text-cyan-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
            variants={highlightVariants}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(6,182,212,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Tomorrow
          </motion.span>{" "}
          <motion.span 
            className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
            variants={highlightVariants}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(34,211,238,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Better
          </motion.span>{" "}
          <motion.span 
            className="text-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
            variants={highlightVariants}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(103,232,249,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Together
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base lg:text-lg text-center font-light text-white px-4 max-w-2xl mx-auto mb-6 sm:mb-8"
          variants={textVariants}
        >
          I&apos;m a Software Developer not by degree🎓 but by Passion.<br/>
        </motion.p>

        {/* Social Links and CTA */}
        <motion.div 
          className="flex justify-center items-center flex-col gap-4 sm:gap-6 lg:gap-8"
          variants={itemVariants}
        >
          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500 transition duration-200 p-3 sm:p-4 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                variants={itemVariants}
                whileHover={{ 
                  scale: isMobile() ? 1.1 : 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
                aria-label={`Visit ${link.label} profile`}
                style={{ 
                  minHeight: `${getTouchTargetSize()}px`, 
                  minWidth: `${getTouchTargetSize()}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="text-xl sm:text-2xl">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            variants={itemVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/1TjeRUM_NDIeDgsDx4seUKuz490-PMeCn/view?usp=drive_link"
              target="_blank"
              download="Suraj_Kumar_CV"
              className="border-2 flex flex-row items-center justify-center gap-2 border-white rounded-3xl px-6 sm:px-8 py-3 sm:py-4 w-48 sm:w-56 hover:bg-white relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ 
                scale: isMobile() ? 1.02 : 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download resume"
              style={{ 
                minHeight: `${getTouchTargetSize()}px`,
                touchAction: 'manipulation'
              }}
            >
              <motion.p 
                className="text-gradient-hover font-medium"
                whileHover={{ 
                  background: "linear-gradient(263.13deg, #CD20A3 -6.47%, #777EC4 49.65%, #0F8882 87.59%, rgba(255, 255, 255, 0) 124.7%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  transition: { duration: 0.3 }
                }}
              >
                Download CV
              </motion.p>
              <motion.div 
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Arrow className="transition-all duration-200 ease-in-out block group-hover:hidden" />
                <Arrow2 className="transition-all duration-200 ease-in-out hidden group-hover:block" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-6 sm:mt-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.p 
            className="text-sm sm:text-base font-medium text-green-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Currently open to new opportunities
          </motion.p>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default LandingPage;
