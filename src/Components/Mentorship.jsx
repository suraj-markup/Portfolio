import mentor from "../assets/mentor.png";
import Circle from "../assets/circle";

const Mentorship = () => {
  return (
    <div>
      <div className="m-auto bg-black lg:py-36 mt-64 px-10">
        <h1 className="relative text-3xl md:text-6xl font-bold text-center mb-16">
          <span className="relative inline-block">
            Mentorship and Community
            <span className="relative">
              <Circle className="absolute size-48  lg:size-max -top-16 lg:-top-8 right-0 translate-x-10  scroll transform lg:translate-x-10" />
            </span>
          </span>
        </h1>
        <div className="flex lg:flex-row flex-col m-auto w-10/12 mt-32 gap-10">
          <div className="w-full lg:w-7/12">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
              tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
              nulla risus magna nisi massa. Egestas mattis ullamcorper integer
              nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
              tempus. Erat in tellus nisl quis ultrices aliquet.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
              tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
              nulla risus magna nisi massa. Egestas mattis ullamcorper integer
              nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
              tempus. Erat in tellus nisl quis ultrices aliquet.Lorem ipsum
              dolor sit amet consectetur. Nec enim feugiat id tristique velit
              vitae a odio mi. Aenean aliquet non dictumst sit nulla risus magna
              nisi massa. Egestas mattis ullamcorper integer nibh ridiculus
              auctor. Nascetur velit diam odio ante tempor amet tempus. Erat in
              tellus nisl quis ultrices aliquet.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
              tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
              nulla risus magna nisi massa. Egestas mattis ullamcorper integer
              nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
              tempus. Erat in tellus nisl quis ultrices aliquet.
              <br />
              <br />
            </p>
          </div>

          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <img src={mentor} alt="mentor-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
