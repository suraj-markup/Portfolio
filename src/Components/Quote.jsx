import screens from "../assets/screens.png";
import Ellipse from "../assets/Ellipse.png";

const Quote = () => {
 

  return (
    <div>
      <div className="relative mt-52 lg:mt-0 bg-black overflow-x-clip h-[70vh] sm:h-[100vh] md:h-[120vh] lg:h-[150vh] xl:h-[160vh]">
        <img
          src={Ellipse}
          alt="screen"
          className="absolute h-screen flex-shrink z-30 opacity-70 -top-56 md:-top-20   w-full"
        />
        <img
          src={screens}
          alt="screen"
          className="absolute w-full flex-shrink"
        />
        <div
          className="relative flex items-center justify-center"
          
        >
          {/* Text with transition */}
          <p
            className={`text-xl font-bold absolute w-7/12 top-[250px] sm:top-[450px] md:top-[470px] lg:top-[620px] xl:top-[730px] 2xl:top-[830px] text-center z-20 left-[22%] sm:text-2xl md:text-4xl lg:text-6xl `}
          >
            Be fearless in the pursuit of what sets your soul on fire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
