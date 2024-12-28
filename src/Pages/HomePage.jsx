import LandingPage from "../Components/LandingPage";

const HomePage = () => {
 


return (
    <>
      <style>{`
        .text-gradient-hover {
          color: white;
          transition: color 0.3s ease, background 0.3s ease;
        }

        .group:hover .text-gradient-hover {
          background: linear-gradient(263.13deg, #CD20A3 -6.47%, #777EC4 49.65%, #0F8882 87.59%, rgba(255, 255, 255, 0) 124.7%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <div className=" text-white bg-black ">
      <section id="landing-page">
        <LandingPage />
      </section>
      


      </div>
    </>
  );
};

export default HomePage;
