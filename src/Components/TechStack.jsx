import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { FaReact, FaFigma } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress, SiTailwindcss, SiPostman, SiFirebase,SiAppwrite } from 'react-icons/si'
import { SiMongodb, SiPostgresql, } from "react-icons/si";
import Circle from "../assets/Circle";

const TechStack = () => {
  
  return (
    <div className="bg-black text-white p-10 mt-28">
          <h1 className="relative text-4xl md:text-6xl font-bold text-center mb-16">
        
        <span
        className="relative inline-block"
              style={{
                background:
                  "linear-gradient(90deg, #FF3BFF 37.5%, #ECBFBF 46.45%, #8156FF 50.68%, #D94FD5 61.05%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
          My Tech Stacks
          <span className="relative">
            <Circle className="absolute size-32  md:size-max -top-8 right-0  transform translate-x-10 md:translate-x-10" />
          </span>
        </span>
      </h1>

          {/* Favoutrite Books */}
          <div className=" w-10/12 m-auto">
           
           
            
            <div className='mt-32 m-auto flex my-16 flex-wrap items-center justify-center lg:gap-7 gap-6 lg:max-w-[70%] md::max-w-[80%] max-w-[90%]'>
            <Skill icon={<AiFillHtml5 />} name="HTML" />
                <Skill icon={<IoLogoCss3 />} name="CSS" />
                <Skill icon={<IoLogoJavascript />} name="JavaScript" />
                <Skill icon={<FaReact />} name="ReactJs" />
                <Skill icon={<TbBrandNextjs />} name="NextJs" />
                {/* <Skill icon={<SiSolidity />} name="Solidity" /> */}
                {/* <Skill icon={<FaEthereum />} name="Ethereum" /> */}
                <Skill icon={<IoLogoNodejs />} name="NodeJs" />
                <Skill icon={<SiExpress />} name="Express" />
                <Skill icon={<SiFirebase />} name="Firebase" />
                <Skill icon={<SiTailwindcss />} name="TailwindCSS" />
              
                {/* <Skill icon={<FaJava />} name="JAVA" /> */}
                {/* <Skill icon={<TbBrandGraphql />} name="GraphQl" /> */}
                <Skill icon={<SiPostman />} name="Postman" />
                <Skill icon={<FaFigma />} name="Figma" />
                <Skill icon={<AiFillGithub />} name="GitHub" />
                <Skill icon={<SiMongodb />} name="MongoDB" />
                <Skill icon={<SiAppwrite />} name="Appwrite" />

                <Skill icon={<SiPostgresql />} name="PostgreSQL" />
                {/* <Skill icon={<SiOracle />} name="OCI" /> */}
                </div>
          </div>

        </div>
  )
}

export default TechStack;

const Skill = ({ icon, name })=> {
  return (
      <div className='text-lg text-gray-300 flex flex-col items-center text-center'>
          <div className='lg:text-5xl md:text-4xl text-3xl'>{icon}</div>
          <div className='text-sm text-gray-400 mt-1'>{name}</div>
      </div>
  )
}