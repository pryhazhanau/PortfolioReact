import "./SkillsetSection.css";
import "../Home.css";
import "../../../common/css/div-layout.css";
import SkillProgress from "../../common/skill-progress/SkillProgress";

function SkillsetSection() {
  return (
    <>
      <div className="skillset-container">
        <h1 className="headline section-title">Skillset</h1>
        <p className="body-text-spacero">
        Throughout my IT career, I've cultivated a versatile skillset that encompasses core competencies crucial to the field. These skills, refined through years of experience, form the bedrock of my professional journey.
        </p>
        <div className="skill-box">
            <SkillProgress percentage={100} text="Swift" grade="Expert"/>
            <SkillProgress percentage={70} text="SwiftUI" grade="Advanced"/>
            <SkillProgress percentage={100} text="UIKit" grade="Expert"/>
            <SkillProgress percentage={50} text="UI/UX" grade="Intermediate"/>
            <SkillProgress percentage={80} text="Agile" grade="Advanced"/>
        </div>
      </div>
    </>
  );
}

export default SkillsetSection;