import "./HomePage.css";
import "../../common/css/div-layout.css";
import HeadlineSection from "./headline-section/HeadlineSection";
import AboutSection from "./about-section/AboutSection";
import SkillsetSection from "./skillset-section/SkillsetSection";
import ExperticeSection from "./expertice-section/ExperticeSection";
import FeedbackSection from "./feedback-section/FeedbackSection";
import MasterContainer from "../../components/master-container/MasterContainer";
import Footer from "../../components/footer/Footer";
import BackgroundImg from "../../assets/headline-background.svg";
import { useState } from "react";

function HomePage() {
  const [backgroundBlurValue, setBlurValue] = useState(0);
  const [backgroundOpacityValue, setOpacityValue] = useState(1);
  const handlingScrollMaxValue = 600;
  const minStartScrollHandlingValue = 30
  const handleScroll = () => {
    if (window.scrollY <= handlingScrollMaxValue && window.scrollY > minStartScrollHandlingValue) {
      const relativeScrollY = window.scrollY - minStartScrollHandlingValue
      setBlurValue(relativeScrollY / 20);
      setOpacityValue(1 - relativeScrollY / handlingScrollMaxValue);
    } else {
      setBlurValue(0)
    }

    if (window.scrollY > handlingScrollMaxValue) {
      setOpacityValue(0)
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <HeadlineSection />
      <MasterContainer>
        <AboutSection />
        <SkillsetSection />
        <ExperticeSection />
        <FeedbackSection />
      </MasterContainer>
      <img
        className="headline-background"
        src={BackgroundImg}
        style={{
          opacity: `${backgroundOpacityValue}`,
          filter: `blur(${backgroundBlurValue}px)`,
        }}
      ></img>
      <div className="thanks-section">
        <div className="thanks-section-wrapper gradient-section-background">
          <h1 className="subtitle-primary">Thank you for visiting!</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
