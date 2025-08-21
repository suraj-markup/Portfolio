import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTouchGestures, isMobile, getMobileAnimationDelay } from '../utils/mobileUtils';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const MobileCarousel = ({ items, autoPlay = true, interval = 5000, showDots = true, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const carouselRef = useRef(null);
  const { handleSwipe } = useTouchGestures();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, autoPlay, interval, items.length]);

  // Touch gesture handling
  useEffect(() => {
    if (!carouselRef.current) return;

    const cleanup = handleSwipe(
      carouselRef.current,
      // Swipe left - next
      () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 3000);
      },
      // Swipe right - previous
      () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 3000);
      },
      // Swipe up - not used
      null,
      // Swipe down - not used
      null
    );

    return cleanup;
  }, [handleSwipe, items.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if (newDirection > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-full overflow-hidden touch-pan-y"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Main Carousel */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <motion.button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: getMobileAnimationDelay(0, 0.2) }}
            style={{ minHeight: '44px', minWidth: '44px' }} // Touch-friendly size
          >
            <IoChevronBack size={20} />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: getMobileAnimationDelay(1, 0.2) }}
            style={{ minHeight: '44px', minWidth: '44px' }} // Touch-friendly size
          >
            <IoChevronForward size={20} />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: getMobileAnimationDelay(index, 0.1) }}
              style={{ minHeight: '24px', minWidth: '24px' }} // Touch-friendly size
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isAutoPlaying && autoPlay && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: interval / 1000, ease: 'linear' }}
          key={currentIndex}
        />
      )}
    </div>
  );
};

export default MobileCarousel;
