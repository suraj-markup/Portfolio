import connect from "../assets/connect.png";
import { Linkedin, Mail } from "../assets/Connect";
import Circle from "../assets/circle";
const Connect = () => {
  return (
    <div className="lg:pb-64">
      <div className="m-auto bg-black py-36 mt-64 px-10">
        <h1 className="relative text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            Lets Connect
            <span className="relative">
              <Circle className="absolute size-44  md:size-max -top-12 lg:-top-8 right-0  transform translate-x-10" />
            </span>
          </span>
        </h1>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-16 m-auto w-full md:w-10/12 mt-32 ">
          <div className="w-full lg:w-4/12 flex flex-col  justify-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
              tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
              nulla risus magna nisi massa. Egestas mattis ullamcorper integer
              nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
              tempus. Erat in tellus nisl quis ultrices aliquet.
            </p>
            <div className="flex gap-5 my-10">
              <Linkedin />
              <p className="text-base md:text-2xl font-semibold">Attul Sreenath</p>
            </div>
            <div className="flex gap-5">
              <Mail />
              <p className="text-base md:text-2xl font-semibold">attul.sreenath@gmail.com</p>
            </div>
          </div>

          <div className="w-6/12 flex items-center justify-end">
            <img src={connect} alt="mentor-photo " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
