import { FC } from "react";
import "./SkillsetCard.css";
import Tilt from "react-parallax-tilt";
import SkillProgress from "../../../../components/common/skill-progress/SkillProgress";
import TextPill from "../../../../components/text-pill/TextPill";

interface SkillsetCardProps {
  skill: SkillCardObj;
}

const SkillSetCard: FC<SkillsetCardProps> = ({ skill }) => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor="#30F6AF"
        glarePosition="bottom"
        glareBorderRadius="28px"
      >
        <div className="skillset-card-wrapper">
          <div className="skillset-card">
            <div className="skillset-progress-container">
              <TextPill text={skill.grade} />
              <SkillProgress
                percentage={skill.percent}
                strokeWidth={16}
                textClass="caption"
              />
            </div>
            <div className="skillset-body-container">
              <div className="skillset-title-wrapper">
                <p className="subtitle-primary-aluminor">{skill.title}</p>
                <div className="skillset-title-line"/>
              </div>
              <p className="body-text-titanium">{skill.body}</p>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default SkillSetCard;