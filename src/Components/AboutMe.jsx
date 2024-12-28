import second from "../assets/suraj/2.jpeg";
import third from "../assets/suraj/3.jpeg";
import fourth from "../assets/suraj/4.jpeg";
import fifth from "../assets/suraj/5.jpeg";
import sixth from "../assets/suraj/6.jpeg";

const images = [
  {
    id: 5,
    source: fifth,
  },
  {
    id: 2,
    source: second,
  },
  {
    id: 3,
    source: third,
  },
  {
    id: 4,
    source: fourth,
  },

  {
    id: 6,
    source: sixth,
  },
];

const AboutMe = () => {
  return (
    <div className="bg-black overflow-x-clip">
      <div className="lg:px-40 flex flex-col items-center h-[130vh] md:h-[130vh] lg:h-[110vh] lg:flex-row lg:space-x-5 overflow-hidden ">
        {/* Column One */}
        <div className=" lg:mt-96 lg:mb-64 px-10 lg:px-0 lg:w-5/12">
          <h1 className="font-bold text-6xl mb-10">About Me</h1>
          <p className="text-lg">
            22 years of mastering the art of overthinking solutions, whether
            it&apos;s coding my way out of bugs, cracking competitive
            programming puzzles, or crafting scalable apps with React.js,
            Tailwind CSS, and Node.js. I juggle frontend finesse with backend
            logic, exploring the tech jungle with tools like Supabase, Appwrite,
            and a solid grip on Data Structures and Algorithms.
            <br />
            <br />
            When I&apos;m not busy pretending to be a problem-solving machine,
            you&apos;ll find me immersed in video games, hitting the basketball
            court, or pretending to be someone else—literally—through drama,
            theater, and stand-up comedy. Books are my escape, but let&apos;s be
            real, the plot twists in my own life are far more entertaining.
          </p>
        </div>

        {/* Column Two */}
        <div className="relative mt-10 lg:mt-96 lg:mb-64 w-full lg:w-7/12 overflow-hidden">
          <div className="flex flex-row gap-2 sm:gap-4 md:gap-5 justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.source}
                alt={`image-${image.id}`}
                className="h-[40vh]  sm:h-[40vh] md:h-[50vh] w-1/6 sm:w-2/12 md:w-2/12 lg:w-2/12 transition-all duration-300 ease-in-out transform hover:scale-100 hover:w-full max-w-full rounded-3xl"
              />
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default AboutMe;
