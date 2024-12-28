import LandingPage from "../Components/LandingPage";
import AboutMe from "../Components/AboutMe";
import Quote from "../Components/Quote";
import MyJourney from "../Components/MyJourney";
import MyProjects from "../Components/MyProjects";
import TopPicks from "../Components/TopPicks";
import Mentorship from "../Components/Mentorship";
import Connect from "../Components/Connect";


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
      
      {/* About Me */}
      <section id="about-me">
        <AboutMe />
      </section>

      {/* Favourite Quote */}
      <section id="quote">
        <Quote />
      </section>

      {/* My Journey */}
      <section id="my-journey">
        <MyJourney />
      </section>

      {/* My Favourite Projects */}
      <section id="my-projects">
        <MyProjects />
      </section>

      {/* My Top Picks */}
      <section id="top-picks">
        <TopPicks />
      </section>

      {/* Mentorship & Community */}
      <section id="mentorship">
        <Mentorship />
      </section>

      {/* Let's Connect */}
      <section id="connect">
        <Connect />
      </section>



      </div>
    </>
  );
};

export default HomePage;
