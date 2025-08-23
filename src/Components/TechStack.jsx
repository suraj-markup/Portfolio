import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { FaReact, FaFigma } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress, SiTailwindcss, SiPostman, SiFirebase,SiAppwrite, SiSupabase, SiDocker } from 'react-icons/si'
import { SiMongodb, SiPostgresql, } from "react-icons/si";
import Circle from "../assets/Circle";


const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
  ];

  const skills = [
    { icon: <AiFillHtml5 />, name: "HTML", category: "frontend" },
    { icon: <IoLogoCss3 />, name: "CSS", category: "frontend", proficiency: 85 },
    { icon: <IoLogoJavascript />, name: "JavaScript", category: "frontend", proficiency: 88 },
    { icon: <FaReact />, name: "ReactJs", category: "frontend", proficiency: 92 },
    { icon: <TbBrandNextjs />, name: "NextJs", category: "frontend", proficiency: 75 },
    { icon: <IoLogoNodejs />, name: "NodeJs", category: "backend", proficiency: 80 },
    { icon: <SiExpress />, name: "Express", category: "backend", proficiency: 78 },
    { icon: <SiFirebase />, name: "Firebase", category: "backend", proficiency: 82 },
    { icon: <SiTailwindcss />, name: "TailwindCSS", category: "frontend", proficiency: 90 },
    { icon: <SiPostman />, name: "Postman", category: "tools", proficiency: 85 },
    { icon: <FaFigma />, name: "Figma", category: "tools", proficiency: 70 },
    { icon: <AiFillGithub />, name: "GitHub", category: "tools", proficiency: 88 },
    { icon: <SiMongodb />, name: "MongoDB", category: "backend", proficiency: 75 },
    { icon: <SiDocker />, name: "Docker", category: "tools", proficiency: 80 },
    { icon: <SiAppwrite />, name: "Appwrite", category: "backend", proficiency: 80 },
    { icon: <SiSupabase />, name: "Supabase", category: "backend", proficiency: 80 },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "backend", proficiency: 72 },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-black text-white p-10 mt-28">
      <motion.h1 
        className="relative text-4xl md:text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="relative inline-block"
          style={{
            background:
              "linear-gradient(90deg, #FF3BFF 37.5%, #ECBFBF 46.45%, #8156FF 50.68%, #D94FD5 61.05%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Tech Stacks
          <span className="relative">
            <Circle className="absolute size-32 md:size-max -top-8 right-0 transform translate-x-10 md:translate-x-10" />
          </span>
        </span>
      </motion.h1>

      {/* Skills Grid */}
      <div className="w-10/12 m-auto">
        <motion.div 
          className="mt-32 m-auto flex my-16 flex-wrap items-center justify-center lg:gap-7 gap-6 lg:max-w-[70%] md::max-w-[80%] max-w-[90%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory} // Re-trigger animation when category changes
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.1,
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <Skill 
                icon={skill.icon} 
                name={skill.name} 
                proficiency={skill.proficiency}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;

const Skill = ({ icon, name, proficiency }) => {
  const [showProficiency, setShowProficiency] = useState(false);

  return (
    <motion.div 
      className="text-lg text-gray-300 flex flex-col items-center text-center relative"
      onHoverStart={() => setShowProficiency(true)}
      onHoverEnd={() => setShowProficiency(false)}
    >
      <motion.div 
        className="lg:text-5xl md:text-4xl text-3xl mb-2"
        whileHover={{ 
          scale: 1.2,
          color: "#8B5CF6",
          transition: { duration: 0.2 }
        }}
      >
        {icon}
      </motion.div>
      <div className="text-sm text-gray-400 mt-1">{name}</div>
      
    </motion.div>
  );
};