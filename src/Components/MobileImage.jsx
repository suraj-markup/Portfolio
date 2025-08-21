import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobile, preloadImage } from '../utils/mobileUtils';

const MobileImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  lazy = true,
  priority = false,
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const imgRef = useRef(null);
  const observerRef = useRef(null);
  const isMobileDevice = isMobile();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(imgRef.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lazy]);

  // Load image when in view
  useEffect(() => {
    if (!isInView) return;

    const loadImage = async () => {
      try {
        if (priority) {
          // For priority images, load immediately
          setImageSrc(src);
        } else {
          // For non-priority images, preload
          await preloadImage(src);
          setImageSrc(src);
        }
      } catch (error) {
        console.error('Error loading image:', error);
        setIsError(true);
        if (onError) onError(error);
      }
    };

    loadImage();
  }, [isInView, src, priority, onError]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleImageError = (error) => {
    setIsError(true);
    if (onError) onError(error);
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: isMobileDevice ? 0.95 : 0.9,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: isMobileDevice ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  const placeholderVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      {/* Placeholder/Skeleton */}
      <AnimatePresence>
        {(!isLoaded || !isInView) && placeholder && (
          <motion.div
            variants={placeholderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-gray-800 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, #374151 25%, #4B5563 50%, #374151 75%)',
              backgroundSize: '200% 100%',
              animation: 'mobileLoading 1.5s infinite'
            }}
          />
        )}
      </AnimatePresence>

      {/* Error State */}
      {isError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gray-800 flex items-center justify-center"
        >
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm">Image failed to load</p>
          </div>
        </motion.div>
      )}

      {/* Actual Image */}
      {isInView && !isError && (
        <motion.img
          src={imageSrc}
          alt={alt}
          variants={imageVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
          {...props}
        />
      )}

      {/* Loading Indicator */}
      {isInView && !isLoaded && !isError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-8 h-8 border-2 border-gray-600 border-t-cyan-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default MobileImage;
