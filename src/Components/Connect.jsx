import Circle from "../assets/circle";
const Connect = () => {
  return (
    <div className="">
      <div className="m-auto bg-black py-36  px-10">
        <h1 className="relative text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            Sold OR Not ?
            <span className="relative">
              <Circle className="absolute size-44  md:size-max -top-12 lg:-top-8 right-0  transform translate-x-10" />
            </span>
          </span>
        </h1>
        <div className=" m-auto w-full md:w-9/12 mt-32  ">
          <p className="text-lg">
            Thanks for stopping by, I&apos;m currently looking to join a new
            team of creative designers and developers. If you think we might be
            a good fit for one another, send me an{" "}
            <a
              className="text-white hover:underline font-bold"
              href={"mailto:sk9261712674@gmail.com"}
            >
              email 📧
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
