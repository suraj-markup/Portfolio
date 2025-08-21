import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import second from "../assets/suraj/2.webp";
import third from "../assets/suraj/3.webp";
import fourth from "../assets/suraj/4.webp";
import fifth from "../assets/suraj/5.webp";
import sixth from "../assets/suraj/6.png";
import first from "../assets/suraj/first2.jpeg";
import { spacingClasses } from "../utils/spacingUtils";

const images = [
  {
    id: 5,
    source: first,
    title: "A Happy and Positive Person",
    description: "Pretending to be a problem-solving machine"
  },
  {
    id: 2,
    source: second,
    title: "A Book Worm",
    description: "Tries to lives diffenent lives in just one life"
  },
  {
    id: 3,
    source: third,
    title: "A Sports Lover",
    description: "Learns how to build and win with team"
  },
  {
    id: 4,
    source: fourth,
    title: "A Part-time Gamer",
    description: "who increases his reflexes and hand-eye coordination"
  },
  {
    id: 6,
    source: sixth,
    title: "Creative Thinker",
    description: "Innovative solutions to complex problems"
  },
];



const AboutMe = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
  }, []);

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

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
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

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "50%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };



  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black overflow-x-clip" id="about-me">
      <div className="py-section px-container sm:px-container-lg lg:px-container-xl flex flex-col items-center min-h-screen lg:flex-row lg:space-x-8 overflow-hidden max-w-content mx-auto">
        {/* Column One - Enhanced Text Content */}
        <motion.div 
          className="lg:w-5/12 px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Title with Typewriter Effect */}
          <motion.div variants={textVariants}>
            <motion.h1 
              className="font-bold text-3xl md:text-6xl  mb-4"
              variants={typewriterVariants}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #FF3BFF 37.5%, #ECBFBF 46.45%, #8156FF 50.68%, #D94FD5 61.05%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Me
              </span>
            </motion.h1>
            <motion.div
              className="h-1 bg-gradient-to-r from-violet-500 to-cyan-500"
              variants={typewriterVariants}
            />
          </motion.div>
          
          {/* Enhanced Description */}
          <motion.div variants={paragraphVariants} className="space-y-4 sm:space-y-6">
            <motion.p 
              className="text-lg leading-relaxed text-gray-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-violet-400 font-semibold">22 years</span> of mastering the art of overthinking solutions, whether
              it&apos;s coding my way out of bugs, cracking competitive
              programming puzzles, or crafting scalable apps. 
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-gray-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              When I&apos;m not busy pretending to be a problem-solving machine,
              you&apos;ll find me immersed in video games, hitting the basketball
              court, or pretending to be someone else—literally—through drama,
              theater, and stand-up comedy.
            </motion.p>
          </motion.div>


        </motion.div>

        {/* Column Two - Enhanced Image Gallery */}
                  <motion.div 
            className="lg:w-7/12 mt-8 sm:mt-10 lg:mt-0 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Image Display */}
          <motion.div 
            className="relative h-[60vh] rounded-2xl overflow-hidden"
            variants={imageVariants}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex].source}
                alt={images[currentImageIndex].title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            
            {/* Image Overlay with Info */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white text-2xl font-bold mb-2">
                {images[currentImageIndex].title}
              </h3>
              <p className="text-gray-300">
                {images[currentImageIndex].description}
              </p>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 backdrop-blur-sm"
              onClick={prevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 backdrop-blur-sm"
              onClick={nextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </motion.div>

          {/* Thumbnail Navigation */}
          <motion.div 
            className="flex justify-center gap-3 mt-4 sm:mt-6"
            variants={imageVariants}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image.source}
                alt={`thumbnail-${image.id}`}
                className={`h-16 w-16 rounded-lg cursor-pointer object-cover transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-2 ring-violet-500 scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage.source}
                alt={`image-${selectedImage.id}`}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.button
                className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMe;
