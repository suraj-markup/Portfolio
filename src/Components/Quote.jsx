import { motion } from "framer-motion";
import screens from "../assets/screens.png";
import Ellipse from "../assets/Ellipse.png";


const Quote = () => {
  return (
    <div>
      <div className="relative mt-52 lg:mt-0 bg-black overflow-x-clip h-[70vh] sm:h-[100vh] md:h-[120vh] lg:h-[130vh] xl:h-[140vh]">
        <img
          src={Ellipse}
          alt="screen"
          className="absolute h-screen flex-shrink z-30 opacity-70 -top-56 md:-top-20 w-full"
        />
        <img
          src={screens}
          alt="screen"
          className="absolute w-full flex-shrink"
        />
        
        {/* Quote Container */}
        <div className="relative flex flex-col items-center justify-center h-full z-20">
          <motion.div
            className="text-center max-w-content mx-auto px-container sm:px-container-lg lg:px-container-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Quote */}
            <motion.p
              className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-relaxed mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Be fearless in the pursuit of what sets your soul on fire.
            </motion.p>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
