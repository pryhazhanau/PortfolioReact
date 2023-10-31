import "./Home.css";
import "../../common/css/div-layout.css";
import HeadlineSection from "./headline-section/HeadlineSection";
import AboutSection from "./about-section/AboutSection";
import SkillsetSection from "./skillset-section/SkillsetSection";

function Home() {
  return (
    <>
      <div>
        <HeadlineSection/>
        <AboutSection/>
        <SkillsetSection/>
      </div>
    </>
  );
}

export default Home;
