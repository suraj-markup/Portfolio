import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaUsers, FaStar, FaEye } from "react-icons/fa";
import { isMobile, getTouchTargetSize, getMobileAnimationDelay, useTouchGestures } from "../utils/mobileUtils";
import { spacingClasses, sectionWrapperClasses, cardWrapperClasses, gridSpacing } from "../utils/spacingUtils";
import health from "../assets/projects/health.png"
import nashta from "../assets/projects/nashta.png"
import alumni from "../assets/projects/alumni.png"
import tesla from "../assets/projects/tesla.png"
import portfolio from "../assets/projects/portfolio.png"
import tpc from "../assets/projects/tpc.png"
import catalyst from "../assets/projects/Catalyst.png"
import ghiblify from "../assets/projects/Ghiblify.png"
import Circle from "../assets/Circle";

const projects = [
  {
    id: 1,
    name: "Catalyst - AI Chat Platform",
    description:
      "Revolutionary AI chat platform with threaded conversations to eliminate clutter from complex discussions.",
    img: catalyst,
    github: "",
    url: "https://www.linkedin.com/posts/suraj-kumar-86217a20a_for-years-weve-treated-ai-chats-like-a-activity-7362374493870182400-HEJW",
    techStack: ["React Js", "Python", "FAST API", "AI Integration", "Threaded UI", "Modern UX"],
    category: "AI/ML",
    longDescription: "A groundbreaking AI chat platform that introduces threaded conversations to solve the fundamental limitation of linear AI chats. Features include clean threaded conversation model, focused spaces for every idea, and easy information retrieval.",
    features: ["Threaded Conversations", "Context Preservation", "Side Topic Management", "Clean UI/UX", "AI Integration", "Project Planning Tools"],
    metrics: {
      visitors: "Coming Soon",
      registrations: "In Development",
      githubStars: 0,
      views: "Demo Available"
    }
  },
  {
    id: 2,
    name: "Ghiblify",
    description:
      "Capitalized on the Ghibli trend by building a website, drove traction, acquiring over 1,000+ website visitors and converting 100+ into paying customers within the first 48 hours, generating INR 3,000 in revenue.",
    img: ghiblify,
    github: "",
    url: "https://ghiblify-two.vercel.app/",
    techStack: ["React Js", "Next.js", "Vercel", "Trend Analysis", "Marketing", "Revenue Generation"],
    category: "Frontend",
    longDescription: "A successful trend-based website that capitalized on the Studio Ghibli trend at the perfect moment. The project demonstrates excellent market timing, user experience design, and conversion optimization skills.",
    features: ["Trend Analysis", "Rapid Development", "User Acquisition", "Conversion Optimization", "Revenue Generation", "Market Timing"],
    metrics: {
      visitors: "1,000+",
      registrations: "100+ Customers",
      githubStars: 0,
      views: "48 Hours Launch",
      revenue: "INR 3,000"
    }
  },
  {
    id: 3,
    name: "NIT Patna, Alumni Portal",
    description:
      "Official Alumni Portal for NIT Patna, One-stop portal for alumni of the NIT Patna.",
    img: alumni,
    github: "https://github.com/suraj-markup/alumini-cell-nitp",
    url: "https://alumini-nitp.vercel.app/",
    techStack: ["React Js", "Node Js", "Express", "Appwrite", "Tailwind CSS"],
    category: "Full Stack",
    longDescription: "A comprehensive alumni portal built for NIT Patna, featuring user registration, profile management, event announcements, and networking capabilities. Currently serving 21k+ visitors with 2k+ registrations.",
    features: ["User Authentication", "Profile Management", "Event Management", "Alumni Directory", "News & Updates"],
    metrics: {
      visitors: "21k+",
      registrations: "2k+",
      githubStars: 15,
      views: "5k+"
    }
  },
  {
    id: 4,
    name: "Tesla NITP",
    description:
      "Official website of Tesla Club NIT Patna, A club for Electrical Engg. students.",
    img: tesla,
    github: "https://github.com/suraj-markup/tesla-nitp-web",
    url: "https://tesla-nitp.vercel.app/",
    techStack: ["React Js", "Node Js", "Express", "Appwrite", "Tailwind CSS"],
    category: "Full Stack",
    longDescription: "Official website for Tesla Club NIT Patna, showcasing club activities, member profiles, and upcoming events for electrical engineering students.",
    features: ["Club Information", "Member Profiles", "Event Calendar", "Resource Sharing", "Contact Management"],
    metrics: {
      visitors: "8k+",
      registrations: "500+",
      githubStars: 8,
      views: "2k+"
    }
  },
  {
    id: 5,
    name: "Tech Pioneer Circle",
    description: "Made the frontend of this website for one of the client.",
    img: tpc,
    github: "",
    url: "https://techpioneerscircle.com/",
    techStack: ["React Js", "Tailwind CSS"],
    category: "Frontend",
    longDescription: "Client project for Tech Pioneer Circle, focusing on creating a modern and responsive frontend design that effectively communicates the company's services and values.",
    features: ["Responsive Design", "Modern UI/UX", "Service Showcase", "Contact Forms", "SEO Optimized"],
    metrics: {
    }
  },
  {
    id: 6,
    name: "Portfolio",
    description: "My portfolio website built with ReactJs and TailwindCSS.",
    img: portfolio,
    github: "https://github.com/suraj-markup/Portfolio",
    url: "https://www.surajmarkup.me/",
    techStack: ["React Js", "Tailwind CSS"],
    category: "Frontend",
    longDescription: "Personal portfolio website showcasing my skills, projects, and journey. Built with modern web technologies and featuring smooth animations and responsive design.",
    features: ["Responsive Design", "Smooth Animations", "Project Showcase", "Interactive Elements", "Modern UI"],
    metrics: {
    }
  },
  {
    id: 7,
    name: "Nankur Nashta",
    description:
      "Made this Food-ordereing website while learning  ReactJs core concetps. Note: while opening this website you might get CORS error as it is using Swiggy's API so you might need to install Allow CORS chrome extension.",
    img: nashta,
    github: "https://github.com/suraj-markup/nankur_nashta",
    url: "https://nankur.vercel.app/",
    techStack: ["React Js", "ReduxJs", "Tailwind CSS", "Context API"],
    category: "Frontend",
    longDescription: "Food ordering website built while learning React core concepts. Features include restaurant browsing, menu selection, cart management, and order processing.",
    features: ["Restaurant Browsing", "Menu Selection", "Cart Management", "Order Processing", "User Reviews"],
    metrics: {

    }
  },
  {
    id: 8,
    name: "HealthSakha",
    description:
      "A health care website for booking appointments and getting health related information. This was my project that was built during a hackathon, it is suitable only for laptop and Please ignore bad UI/UX.",
    img: health,
    github: "https://github.com/suraj-markup/Byteverse_healthsakha",
    url: "https://byteverse-nerds.vercel.app/",
    techStack: [
      "React Js",
      "Bootstrap",
      "Firebase",
      "Google Maps API",
      "Dialogflow chatbot",
    ],
    category: "Full Stack",
    longDescription: "Healthcare platform developed during a hackathon for booking appointments and accessing health-related information. Features include doctor booking, health articles, and AI-powered chatbot assistance.",
    features: ["Appointment Booking", "Health Articles", "AI Chatbot", "Doctor Directory", "Location Services"],
    metrics: {
    
    }
  },
];

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showArchive, setShowArchive] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const projectsContainerRef = useRef(null);
  const { handleSwipe } = useTouchGestures();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'full stack', name: 'Full Stack' },
    { id: 'ai/ml', name: 'AI/ML' },
  ];

  // Filter projects based on category and archive status
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || 
        project.category.toLowerCase() === selectedCategory;
      
      return matchesCategory;
    });

    // Show only first 6 projects by default, or all if archive is open
    if (!showArchive) {
      filtered = filtered.slice(0, 6);
    }

    return filtered;
  }, [selectedCategory, showArchive]);

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

  const cardVariants = {
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

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobileDevice(isMobile());
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div 
      className={`bg-black text-white ${sectionWrapperClasses}`}
      ref={projectsContainerRef}
      style={{ 
        touchAction: 'pan-y',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <motion.h1 
        className="relative text-3xl md:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
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
          My Favourite Projects
          <span className="relative">
            <Circle className="absolute size-32 md:size-max -top-10 md:-top-5 lg:-top-20 right-0 transform translate-x-4 md:translate-x-12 lg:translate-x-10" />
          </span>
        </span>
      </motion.h1>

      {/* Project Introduction Section */}
      <motion.div 
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Project Description */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Here you'll find a collection of my projects built for{" "}
            <span className="text-violet-400 font-semibold">personal growth</span>,{" "}
            <span className="text-cyan-400 font-semibold">group collaborations</span>,{" "}
            <span className="text-green-400 font-semibold">freelance work</span>, and{" "}
            <span className="text-yellow-400 font-semibold">learning experiences</span>.
          </p>
        </motion.div>        
      </motion.div>

      <div className="mt-16 m-auto px-4">
        <motion.div 
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${selectedCategory}-${showArchive}`}
        >
          {filteredProjects.map((project, id) => (
            <motion.div
              key={id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-violet-700/30 cursor-pointer group overflow-hidden relative"
              variants={cardVariants}
              whileHover={{ 
                y: isMobileDevice ? -5 : -10,
                scale: isMobileDevice ? 1.01 : 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              style={{ 
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {/* Large Project Number */}
              <motion.div
                className="absolute -bottom-3 -right-0 text-7xl md:text-8xl lg:text-9xl font-bold text-white/20 select-none pointer-events-none z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: id * 0.1, duration: 0.5 }}
              >
                {(id + 1).toString().padStart(2, '0')}
              </motion.div>

              {/* Project Image */}
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={`${project.img}`}
                  alt="project"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Development Badge for Catalyst */}
                {project.name.includes("Catalyst") && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold z-20">
                    🚀 In Development
                  </div>
                )}
              </motion.div>

              {/* Project Content */}
              <div className="p-6 relative z-20">
                <motion.h2 
                  className="text-xl font-bold mb-2"
                  whileHover={{ color: "#8B5CF6" }}
                >
                  {project.name}
                </motion.h2>
                
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                {/* Project Metrics */}
            
               <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                 { project.metrics.visitors && <div className="flex items-center gap-1">
                    <FaEye className="text-violet-400" />
                    <span>{project.metrics.visitors}</span>
                  </div>}
                  { project.metrics.registrations && <div className="flex items-center gap-1">
                    <FaUsers className="text-violet-400" />
                    <span>{project.metrics.registrations}</span>
                  </div>}
                  {project.metrics.githubStars>0 && (
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{project.metrics.githubStars}</span>
                    </div>
                  )}
                  {project.metrics.revenue && (
                    <div className="flex items-center gap-1">
                      <span className="text-green-400 font-semibold">💰</span>
                      <span className="text-green-400">{project.metrics.revenue}</span>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.techStack.map((tech, id) => (
                    <motion.span
                      key={id}
                      className="bg-violet-700/50 px-3 py-1 rounded-xl text-white text-xs border border-violet-600/30"
                      whileHover={{ scale: 1.1, backgroundColor: "#7C3AED" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-4 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.github && (
                    <motion.a
                      href={`${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-500 hover:text-gray-200"
                      whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  <motion.a
                    href={`${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-500 hover:text-gray-200"
                    whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BiWorld />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Archive Link */}
        {!showArchive && projects.length > 6 && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowArchive(true)}
              className="text-violet-400 hover:text-violet-300 text-lg font-medium transition-colors duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Archive →
            </motion.button>
            <p className="text-sm text-gray-500 mt-2">
              Older projects from my learning days
            </p>
          </motion.div>
        )}

        {/* Back to Main Projects */}
        {showArchive && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowArchive(false)}
              className="text-violet-400 hover:text-violet-300 text-lg font-medium transition-colors duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Main Projects
            </motion.button>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setShowArchive(false);
              }}
              className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {/* <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-violet-700"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-red-400 text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoClose />
                </motion.button>
              </div>
              
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <p className="text-gray-300 mb-4">{selectedProject.longDescription}</p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Features:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {selectedProject.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="bg-violet-700 px-3 py-1 rounded-xl text-white text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.github && (
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                )}
                <motion.a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-violet-700 hover:bg-violet-600 px-4 py-2 rounded-lg text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BiWorld />
                  {selectedProject.name.includes("Catalyst") ? "Watch Demo" : "Live Demo"}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default MyProjects;
