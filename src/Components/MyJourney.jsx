import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaTrophy, FaPlane, FaGlobe, FaBriefcase, FaStar } from "react-icons/fa";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";

const MyJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineData = [
    {
      id: 1,
      year: "2021",
      title: "College",
      subtitle: "NIT Patna",
      description: "Joined NIT Patna for B.Tech in Electrical Engineering Department",
      icon: <FaGraduationCap />,
      achievement: "Started Engineering Journey"
    },
    {
      id: 2,
      year: "2022",
      title: "Hackathon",
      subtitle: "First Hackathon",
      description: "Selected as top 10 team, was invited for offline participation",
      icon: <FaTrophy />,
      achievement: "Top 10 Finalist"
    },
    {
      id: 3,
      year: "2023",
      title: "First Sponsored Trip",
      subtitle: "by Algorand Foundation",
      description: "From whole college only I got selected for sponsored trip to Algorand Impact Summit at New Delhi",
      icon: <FaPlane />,
      achievement: "Exclusive Selection"
    },
    {
      id: 4,
      year: "2023",
      title: "Alumni Website",
      subtitle: "of NIT Patna",
      description: "Built Official Alumni website of college. Currently 21k+ visitors and 2k+ registration",
      icon: <FaGlobe />,
      achievement: "21k+ Visitors"
    },
    {
      id: 5,
      year: "2024",
      title: "First Internship",
      subtitle: "as Frontend Developer",
      description: "Completed my 2M internship at Build In Bharat Tech from Jun-Aug, 2024",
      icon: <FaBriefcase />,
      achievement: "2-Month Internship"
    },
    {
      id: 6,
      year: "2024",
      title: "Present",
      subtitle: "Open for any opportunity",
      description: "Currently open for any opportunity in Web/Software Domain",
      icon: <FaStar />,
      achievement: "Available for Opportunities"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
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

  return (
    <div className="bg-black text-white py-20" id="my-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #FF3BFF 37.5%, #ECBFBF 46.45%, #8156FF 50.68%, #D94FD5 61.05%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Journey
            </span>
          </motion.h1>
          <motion.div
            className="h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto w-24"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Horizontal Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Years Row */}
          <div className="flex justify-between items-center mb-8 px-4">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                {/* Year Box */}
                <motion.div
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-bold text-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.year}
                </motion.div>
                
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-violet-500/30 mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-violet-400 text-xl">{item.icon}</span>
                </motion.div>
                
                {/* Vertical Line */}
                <div className="w-1 h-16 bg-gradient-to-b from-violet-500 to-cyan-500"></div>
              </motion.div>
            ))}
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-violet-700/30 p-4 hover:border-violet-600/50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Achievement Badge */}
                <motion.div
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {item.achievement}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                
                {/* Subtitle */}
                <p className="text-gray-300 text-sm mb-3">{item.subtitle}</p>
                
                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.button
            className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MyJourney;