import { motion } from 'framer-motion';
import { isMobile } from '../utils/mobileUtils';

const MobileLoading = ({ type = 'skeleton', count = 3, className = '' }) => {
  const isMobileDevice = isMobile();

  const skeletonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobileDevice ? 0.1 : 0.2,
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
        duration: isMobileDevice ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const renderSkeletonCard = () => (
    <motion.div
      variants={itemVariants}
      className={`bg-gray-800/50 rounded-lg p-4 border border-gray-700/30 ${className}`}
      style={{
        minHeight: isMobileDevice ? '200px' : '250px',
        touchAction: 'none'
      }}
    >
      {/* Image skeleton */}
      <motion.div
        variants={pulseVariants}
        className="w-full h-32 bg-gray-700 rounded-lg mb-4"
        initial="hidden"
        animate="visible"
      />
      
      {/* Title skeleton */}
      <motion.div
        variants={pulseVariants}
        className="h-6 bg-gray-700 rounded mb-3 w-3/4"
        initial="hidden"
        animate="visible"
      />
      
      {/* Description skeleton */}
      <motion.div
        variants={pulseVariants}
        className="h-4 bg-gray-700 rounded mb-2 w-full"
        initial="hidden"
        animate="visible"
      />
      <motion.div
        variants={pulseVariants}
        className="h-4 bg-gray-700 rounded mb-3 w-2/3"
        initial="hidden"
        animate="visible"
      />
      
      {/* Tags skeleton */}
      <div className="flex gap-2 flex-wrap">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            variants={pulseVariants}
            className="h-6 bg-gray-700 rounded-full w-16"
            initial="hidden"
            animate="visible"
          />
        ))}
      </div>
    </motion.div>
  );

  const renderSpinner = () => (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-gray-700 border-t-cyan-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformOrigin: 'center',
          willChange: 'transform'
        }}
      />
    </motion.div>
  );

  const renderProgress = () => (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-800 rounded-full h-2 mb-4">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </div>
      <motion.p
        className="text-center text-gray-400 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );

  if (type === 'spinner') {
    return renderSpinner();
  }

  if (type === 'progress') {
    return renderProgress();
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      variants={skeletonVariants}
      initial="hidden"
      animate="visible"
      style={{
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeletonCard()}
        </div>
      ))}
    </motion.div>
  );
};

export default MobileLoading;
