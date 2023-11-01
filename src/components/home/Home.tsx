import "./Home.css";
import "../../common/css/div-layout.css";
import HeadlineSection from "./headline-section/HeadlineSection";
import AboutSection from "./about-section/AboutSection";
import SkillsetSection from "./skillset-section/SkillsetSection";
import ExperticeSection from "./expertice-section/ExperticeSection";

function Home() {
  return (
    <>
      <div>
        <HeadlineSection/>
        <AboutSection/>
        <SkillsetSection/>
        <ExperticeSection/>
      </div>
    </>
  );
}

export default Home;
