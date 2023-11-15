import "./HomePage.css";
import "../../common/css/div-layout.css";
import HeadlineSection from "./headline-section/HeadlineSection";
import AboutSection from "./about-section/AboutSection";
import SkillsetSection from "./skillset-section/SkillsetSection";
import ExperticeSection from "./expertice-section/ExperticeSection";
import FeedbackSection from "./feedback-section/FeedbackSection";
import MasterContainer from "../../components/master-container/MasterContainer";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <>
    <HeadlineSection />
    <MasterContainer>
      <AboutSection />
      <SkillsetSection />
      <ExperticeSection />
      <FeedbackSection />
    </MasterContainer>
      <div className="thanks-section">
        <div className="thanks-section-wrapper gradient-section-background">
        <h1 className="subtitle-primary">Thank you for visiting!</h1>
        </div>
      </div>
    <Footer/>
      </>
  );
}

export default HomePage;
