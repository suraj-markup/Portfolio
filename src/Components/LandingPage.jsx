import { Arrow, Arrow2 } from "../assets/Avatar";
import suraj from "../assets/suraj/suraj.jpeg";
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiLeetcode,SiCodechef } from "react-icons/si";

import bg from '../assets/bg.mp4'

const LandingPage = () => {
  return (
    <div className="relative h-[140vh] md:h-[110vh] bg-cover bg-no-repeat bg-center pt-1 -mt-10">
      {/* YouTube Video Background */}
     
      <video autoPlay loop muted className="bg-vid absolute  inset-0 h-[110vh] md:h-[110vh] w-full bg-cover overflow-scroll object-cover"> <source src={bg} type="video/mp4"  /> 
     </video>


      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center  pt-24 sm:pt-20  items-center mt-20 lg:mt-40 ">
        <img src={suraj} alt="profile photo" id="profile photo"className="w-48 rounded-full" />
        <p className="text-base md:text-xl  text-white my-2 ">Hola Amigo, I&apos;m <span className="text-3xl font-bold ">Suraj Kumar ✌️</span></p>
<h1 className="text-2xl md:text-3xl lg:text-5xl  w-9/12 lg:w-6/12 text-center mb-5 text-white">
  I believe in building <br/> <span className="text-cyan-500 text-4xl md:text-5xl lg:text-6xl font-bold ">Tomorrow </span> <span className="text-cyan-400 text-4xl md:text-5xl lg:text-6xl font-bold">Better </span>  <span className="text-cyan-300 text-4xl md:text-5xl lg:text-6xl font-bold">Together </span>
</h1>
<p className="text-sm md:text-base lg:text-lg w-8/12 lg:w-6/12 text-center font-light text-white">
  I&apos;m a Software Developer not by degree🎓 but by Passion.<br/>
</p>

<div className="flex justify-center items-center flex-col md:flex-row gap-5  my-8 ">
  <div className="flex flex-row gap-x-5">

<a href="mailto:sk9261712674@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-mail text-2xl"><MdOutlineMail/></i>
  </a>
  <a href="https://leetcode.com/u/suraj-markup/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-linkedin text-2xl"><SiLeetcode/></i>
  </a>
  <a href="https://www.codechef.com/users/surajmarkup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-linkedin text-2xl"><SiCodechef/></i>
  </a>
  <a href="https://www.linkedin.com/in/suraj-kumar-86217a20a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-linkedin text-2xl"><FaLinkedinIn/></i>
  </a>
  <a href="https://github.com/suraj-markup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-github text-2xl"><FaGithub /></i>
  </a>
  <a href="https://x.com/suraj_markup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition duration-200">
    <i className="fab fa-twitter text-2xl"> <FaXTwitter/></i>
  </a>
  </div>
  <div>

  
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
    </div>
  );
};

export default LandingPage;
