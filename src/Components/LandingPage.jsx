import { Avatar, Arrow, Arrow2 } from "../assets/Avatar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import bg from '../assets/bg.mp4'

const LandingPage = () => {
  return (
    <div className="relative h-[140vh] md:h-[120vh] lg:h-[140vh] xl:h-[120vh] bg-cover bg-no-repeat bg-center pt-1">
      {/* YouTube Video Background */}
     
      <video autoPlay loop muted className="bg-vid absolute  inset-0 h-[100vh] md:h-[140vh] w-full bg-cover overflow-scroll object-cover"> <source src={bg} type="video/mp4"  /> 
     </video>


      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center mt-40 lg:mt-48 ">
        <Avatar  />
        <p className="text-2xl  text-white my-2 ">Hello, I&apos;m <span className="text-3xl font-bold ">Suraj Kumar ✌️</span></p>
<h1 className="text-3xl md:text-4xl lg:text-5xl  w-9/12 lg:w-6/12 text-center mb-5 text-white">
  I believe in building <br/> <span className="text-cyan-500 text-4xl md:text-5xl lg:text-6xl font-bold ">Tomorrow </span> <span className="text-cyan-400 text-4xl md:text-5xl lg:text-6xl font-bold">Better </span>  <span className="text-cyan-300 text-4xl md:text-5xl lg:text-6xl font-bold">Together </span>
</h1>
<p className="text-sm md:text-base lg:text-lg w-8/12 lg:w-6/12 text-center font-light text-white">
  I&apos;m a Software Developer not by degree🎓 but by Passion.<br/>
</p>

<div className="flex justify-center items-center gap-10 my-8 ">
  <a href="https://www.linkedin.com/in/suraj-kumar-86217a20a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-linkedin text-2xl"><FaLinkedinIn/></i>
  </a>
  <a href="https://github.com/suraj-markup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-github text-2xl"><FaGithub /></i>
  </a>
  <a href="https://x.com/suraj_markup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-twitter text-2xl"> <FaXTwitter/></i>
  </a>
  
<a href="https://drive.google.com/file/d/1JicCSLC9AcpyZ7BMR4jKRa7boTUIStgq/view?usp=drive_link" target="_blank" download="Suraj_Kumar_CV" className="border-2 flex flex-row items-center justify-center gap-2 border-white rounded-3xl px-4 py-2 w-40 hover:bg-white relative group ">
  <p className="text-gradient-hover">Download CV</p>
  <div className="relative">
    <Arrow className="transition-all duration-200 ease-in-out block group-hover:hidden" />
    <Arrow2 className="transition-all duration-200 ease-in-out hidden group-hover:block" />
  </div>
</a>
</div>


      </div>
    </div>
  );
};

export default LandingPage;
