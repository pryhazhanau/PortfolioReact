import { FC } from "react";
import "./SkillsetCard.css";
import Tilt from "react-parallax-tilt";
import SkillProgress from "../common/skill-progress/SkillProgress";
import TextPill from "../text-pill/TextPill";

interface SkillsetCardProps {
  skill: SkillCardObj
}

const SkillSetCard: FC<SkillsetCardProps> = ({skill}) => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="#30F6AF"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div className="skillset-wrapper">
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
              <p className="subtitle-primary-aluminor">{skill.title}</p>
              <p className="body-text-titanium">
                {skill.body}
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default SkillSetCard;
