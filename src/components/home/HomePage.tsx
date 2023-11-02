import "./HomePage.css";
import "../../common/css/div-layout.css";
import HeadlineSection from "./headline-section/HeadlineSection";
import AboutSection from "./about-section/AboutSection";
import SkillsetSection from "./skillset-section/SkillsetSection";
import ExperticeSection from "./expertice-section/ExperticeSection";
import FeedbackSection from "./feedback-section/FeedbackSection";
import MainContainer from "../maincontainer/MasterContainer";

function HomePage() {
  return (
    <MainContainer>
      <HeadlineSection />
      <AboutSection />
      <SkillsetSection />
      <ExperticeSection />
      <FeedbackSection />
      <div className="thanks-section">
        <h1 className="subtitle-primary">Thank you for visiting!</h1>
      </div>
    </MainContainer>
  );
}

export default HomePage;
