import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import health from "../assets/projects/health.png"
import nashta from "../assets/projects/nashta.png"
import alumni from "../assets/projects/alumni.png"
import tesla from "../assets/projects/tesla.png"
import portfolio from "../assets/projects/portfolio.png"
import tpc from "../assets/projects/tpc.png"
import Circle from "../assets/Circle";

const projects = [
  {
    id: 1,
    name: "NIT Patna, Alumni Portal",
    description:
      "Official Alumni Portal for NIT Patna, One-stop portal for alumni of the NIT Patna.",
    img: alumni,
    github: "https://github.com/suraj-markup/alumini-cell-nitp",
    url: "https://alumini-nitp.vercel.app/",
    techStack: ["React Js", "Node Js", "Express", "Appwrite", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "Tesla NITP",
    description:
      "Official website of Tesla Club NIT Patna, A club for Electrical Engg. students.",
    img: tesla,
    github: "https://github.com/suraj-markup/tesla-nitp-web",
    url: "https://tesla-nitp.vercel.app/",
    techStack: ["React Js", "Node Js", "Express", "Appwrite", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Tech Pioneer Circle",
    description: "Made the frontend of this website for one of the client.",
    img: tpc,
    github: "",
    url: "https://techpioneerscircle.com/",
    techStack: ["React Js", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Portfolio",
    description: "My portfolio website built with ReactJs and TailwindCSS.",
    img: portfolio,
    github: "https://github.com/suraj-markup/Portfolio",
    url: "https://www.surajmarkup.me/",
    techStack: ["React Js", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "Nankur Nashta",
    description:
      "Made this Food-ordereing website while learning  ReactJs core concetps. Note: while opening this website you might get CORS error as it is using Swiggy's API so you might need to install Allow CORS chrome extension.",
    img: nashta,
    github: "https://github.com/suraj-markup/nankur_nashta",
    url: "https://nankur.vercel.app/",
    techStack: ["React Js", "ReduxJs", "Tailwind CSS", "Context API"],
  },
  {
    id: 6,
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
  },
];

const MyProjects = () => {
  return (
    <div className="bg-black text-white p-10 mt-10">
      <h1 className="relative text-3xl md:text-6xl font-bold text-center mb-16">
      <span
      className="relative inline-block"
              style={{
                background:
                  "linear-gradient(90deg, #FF3BFF 37.5%, #ECBFBF 46.45%, #8156FF 50.68%, #D94FD5 61.05%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
        
          My Favourite Projects
          <span className="relative">
            <Circle className="absolute size-32  md:size-max -top-10 md:-top-5 right-0  transform translate-x-4 md:translate-x-12" />
          </span>
        </span>
      </h1>
      <div className="mt-28 m-auto px-4">
  <div className="mt-10 flex flex-wrap gap-6 justify-center">
    {projects.map((project, id) => (
      <div
        key={id}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-2xl border-violet-700 border-solid border-2"
      >
        <div className="rounded-2xl border-blue-700 border-solid border-2 overflow-hidden">
          <img
            src={`${project.img}`}
            alt="project"
            className="rounded-2xl w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-xl my-2 font-bold">{project.name}</h2>
        <h3 className="text-sm text-gray-600">{project.description}</h3>
        <p className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech, id) => (
            <span
              key={id}
              className="bg-violet-700 px-3 py-1 rounded-xl text-white text-xs"
            >
              {tech}
            </span>
          ))}
        </p>
        <div className="mt-4 flex gap-4 items-center">
          <a
            href={`${project.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href={`${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-800 hover:text-black"
          >
            <BiWorld />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default MyProjects;
