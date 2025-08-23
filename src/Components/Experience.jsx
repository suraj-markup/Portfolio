import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaAppStore, FaGooglePlay } from "react-icons/fa";
import Circle from "../assets/Circle";
import splitlyLogo from "../assets/Experience/splitly-logo.png";
import { isMobile, getTouchTargetSize, getMobileAnimationDelay } from "../utils/mobileUtils";
import { sectionWrapperClasses, cardWrapperClasses, gridSpacing } from "../utils/spacingUtils";

const Experience = () => {
  const isMobileDevice = isMobile();
  
  const workExperience = [
    {
      id: 1,
      title: "SWE Intern",
      company: "Splitly",
      duration: "Jan 2025 - Present",
      location: "Remote",
      type: "Internship",
      description: [
        "Built Splitly (free Splitwise alternative) from scratch - full-stack development for comprehensive expense management.",
        "Led end-to-end development and launched Splitly on App Store & Play Store, achieving 300+ downloads.",
        "Engineered React Native frontend with optimized UX and built SEO-optimized landing page generating 15k+ visitors in 1 month.",
        "Owned backend development in Go Lang, implementing OAuth 2.0, OTP verification, and real-time push notifications.",
        "Integrated Mistral AI & Grok models for OCR receipt scanning with 3-second processing time.",
        "Enhanced app stability by fixing 30+ bugs in 3 weeks, improving overall performance."
      ],
      features: [
        "AI Receipt Scanning with 99%+ accuracy",
        "Unlimited bills & groups (core functionality free forever)",
        "Smart debt simplification",
        "Multi-currency support (200+ currencies)",
        "End-to-end encryption",
        "Offline functionality"
      ],
      achievements: ["300+ Downloads", "15k+ Visitors", "3-second Processing"],
      links: {
        website: "https://www.splitlyapp.com/",
        playStore: "https://play.google.com/store/apps/details?id=com.itrytoohard.owezy",
        appStore: "https://apps.apple.com/in/app/splitly-snap-and-split-bills/id6746122326"
      }
    },
    {
      id: 2,
      title: "Frontend Engineer Intern",
      company: "Build In Bharat Tech",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote",
      type: "Internship",
      description: [
        "Developed & delivered frontend for 4 projects from scratch with React.js & Tailwind CSS, ensuring high-quality, responsive designs.",
        "Boosted page load efficiency by 30% by applying lazy loading & other performance optimization techniques.",
        "Improved development efficiency by 30% utilizing component libraries like ShadCN & Material UI."
      ],
      achievements: ["4 Projects Delivered", "30% Performance Boost", "30% Efficiency Improvement"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobileDevice ? 0.1 : 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobileDevice ? 0.4 : 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className={`bg-black text-white pb-48 px-container sm:px-container-lg lg:px-container-xl max-w-content mx-auto`}
      id="experience"
      style={{ 
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <motion.h1 
        className="relative text-3xl md:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: isMobileDevice ? 0.6 : 0.8 }}
      >
        <span
          className="relative inline-block"
          style={{
            background:
              "linear-gradient(90deg, #FF3BFF 37.5%, #ECBFBF 46.45%, #8156FF 50.68%, #D94FD5 61.05%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experience
          <span className="relative">
            <Circle className="absolute size-20 sm:size-24 md:size-32 lg:size-max -top-6 sm:-top-8 md:-top-5 lg:-top-20 right-0 transform translate-x-2 sm:translate-x-4 md:translate-x-12 lg:translate-x-10" />
          </span>
        </span>
      </motion.h1>

      {/* Experience Cards */}
      <div className="mt-8 sm:mt-12 lg:mt-16 m-auto px-2 sm:px-4">
        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-content-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {workExperience.map((exp, id) => (
            <motion.div
              key={exp.id}
              className={`${cardWrapperClasses} group overflow-hidden relative`}
              variants={cardVariants}
              whileHover={{ 
                y: isMobileDevice ? -5 : -10,
                scale: isMobileDevice ? 1.01 : 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {/* Large Experience Number */}
              <motion.div
                className="absolute -bottom-0 -right-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/20 select-none pointer-events-none z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: getMobileAnimationDelay(id, 0.1), duration: 0.5 }}
              >
                {(id + 1).toString().padStart(2, '0')}
              </motion.div>

              {/* Experience Content */}
              <div className="p-4 sm:p-6 lg:p-8 relative z-20">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  {/* Company Logo for Splitly */}
                  {exp.company === "Splitly" ? (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border border-violet-500/30 overflow-hidden">
                      <img 
                        src={splitlyLogo} 
                        alt="Splitly Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-500/20 rounded-full flex items-center justify-center border border-violet-500/30">
                      <FaBriefcase className="text-violet-400 text-lg sm:text-xl" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <motion.h2 
                      className="text-lg sm:text-xl font-bold mb-1 leading-tight"
                      whileHover={{ color: "#8B5CF6" }}
                    >
                      {exp.title}
                    </motion.h2>
                    <p className="text-gray-300 text-xs sm:text-sm truncate">{exp.company}</p>
                  </div>
                  {/* Links for Splitly */}
                  {exp.links && (
                    <div className="flex gap-1 sm:gap-2">
                      <motion.a
                        href={exp.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 bg-violet-500/20 rounded-full border border-violet-500/30 hover:bg-violet-500/30 transition-colors"
                        whileHover={{ scale: isMobileDevice ? 1.05 : 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ 
                          minHeight: `${getTouchTargetSize()}px`, 
                          minWidth: `${getTouchTargetSize()}px`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="Visit website"
                      >
                        <FaExternalLinkAlt className="text-violet-400 text-xs sm:text-sm" />
                      </motion.a>
                      <motion.a
                        href={exp.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 bg-green-500/20 rounded-full border border-green-500/30 hover:bg-green-500/30 transition-colors"
                        whileHover={{ scale: isMobileDevice ? 1.05 : 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ 
                          minHeight: `${getTouchTargetSize()}px`, 
                          minWidth: `${getTouchTargetSize()}px`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="View on Google Play"
                      >
                        <FaGooglePlay className="text-green-400 text-xs sm:text-sm" />
                      </motion.a>
                      <motion.a
                        href={exp.links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 bg-blue-500/20 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                        whileHover={{ scale: isMobileDevice ? 1.05 : 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ 
                          minHeight: `${getTouchTargetSize()}px`, 
                          minWidth: `${getTouchTargetSize()}px`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="View on App Store"
                      >
                        <FaAppStore className="text-blue-400 text-xs sm:text-sm" />
                      </motion.a>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-violet-400 text-xs sm:text-sm" />
                    <span className="truncate">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-violet-400 text-xs sm:text-sm" />
                    <span className="truncate">{exp.location}</span>
                  </div>
                  <span className="px-2 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs border border-violet-500/30 whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>

                <div className="space-y-2 mb-4 sm:mb-6">
                  {exp.description.map((desc, index) => (
                    <p key={index} className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      • {desc}
                    </p>
                  ))}
                </div>

                {/* Features for Splitly */}
                {exp.features && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">Key Features Built:</h4>
                    <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                      {exp.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-violet-400 rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                          <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.achievements.map((achievement, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30 whitespace-nowrap"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
