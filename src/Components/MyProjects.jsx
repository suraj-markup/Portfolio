import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import Circle from "../assets/circle";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className="bg-black text-white p-10 mt-10">
      <h1 className="relative text-3xl md:text-6xl font-bold text-center mb-16">
        <span className="relative inline-block">
          My Favourite Projects
          <span className="relative">
            <Circle className="absolute size-32  md:size-max -top-10 md:-top-5 right-0  transform translate-x-4 md:translate-x-12" />
          </span>
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full my-5 md:my-0 place-items-center  ">
        
        {/* Image 1 */}
        <div className="relative group col-span-1 md:col-span-1 md:row-span-2 md:ml-36 py-5 rounded-xl">
          {/* Background Image */}
          <img
            src={image1}
            alt="Project xyz"
            className="w-full rounded-xl object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>

          {/* Project Info */}
          <div className="absolute bottom-5 left-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h2 className="text-2xl font-bold">Project xyz</h2>
            <p className="flex items-center text-sm">
              <span className="mr-1">📍</span> Mumbai, Maharashtra
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group col-span-1 md:col-span-2 my-5 md:my-0  md:mr-32 md:-ml-4">
          <img
            src={image2}
            alt="Project 2"
            className="rounded-xl object-cover h-full w-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
          {/* Project Info */}
          <div className="absolute bottom-5 left-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h2 className="text-2xl font-bold">Project 2</h2>
            <p className="flex items-center text-sm">
              <span className="mr-1">📍</span> Location 2
            </p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group col-span-1 row-span-1 w-[120%] my-5 md:my-0  md:ml-20 md:-mt-5 ">
          <img
            src={image3}
            alt="Project 3"
            className="rounded-xl object-cover h-full w-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
          {/* Project Info */}
          <div className="absolute bottom-5 left-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h2 className="text-2xl font-bold">Project 3</h2>
            <p className="flex items-center text-sm">
              <span className="mr-1">📍</span> Location 3
            </p>
          </div>
        </div>

        {/* Image 4 */}
          <Link to="/projects"> 
        <div className="relative group col-span-1 row-span-1 w-full my-5 md:my-0 md:-ml-4 md:-mt-5">
          <img
            src={image4}
            alt="Project 4"
            className="rounded-xl object-cover h-full w-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
          {/* Project Info */}
          <div className="absolute bottom-5 left-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h2 className="text-2xl font-bold">Project 4</h2>
            <p className="flex items-center text-sm">
              <span className="mr-1">📍</span> Location 4
            </p>
          </div>
        </div>

          </Link>
        {/* Image 5 */}
        <div className="relative group col-span-1 md:col-span-2 my-5 md:my-0  md:ml-40 md:-mr-10">
          <img
            src={image5}
            alt="Project 5"
            className="rounded-xl object-cover h-full w-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
          {/* Project Info */}
          <div className="absolute bottom-5 left-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h2 className="text-2xl font-bold">Project 5</h2>
            <p className="flex items-center text-sm">
              <span className="mr-1">📍</span> Location 5
            </p>
          </div>
        </div>

        {/* Image 6 */}
        <div className="relative group col-span-1 row-span-1 my-5 md:my-0 md:mr-20">
          <img
            src={image6}
            alt="Project 6"
            className="rounded-xl object-cover h-full w-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
          {/* Project Info */}
          <div className="absolute bottom-5 left-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h2 className="text-2xl font-bold">Project 6</h2>
            <p className="flex items-center text-sm">
              <span className="mr-1">📍</span> Location 6
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyProjects;
