import { FC } from "react";
import "./SkillsetCard.css";
import Tilt from "react-parallax-tilt";
import SkillProgress from "../../../../components/common/skill-progress/SkillProgress";
import TextPill from "../../../../components/text-pill/TextPill";
import FlexBox from "../../../../components/common/box/FlexBox";
import Text from "../../../../components/common/style/Text";
import { Typography } from "../../../../components/common/style/interface/Typography";
import { Colors } from "../../../../components/common/style/interface/Colors";

interface SkillsetCardProps {
  skill: SkillCardObj;
}

const SkillSetCard: FC<SkillsetCardProps> = ({ skill }) => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor="#30F6AF"
        glarePosition="bottom"
        glareBorderRadius="28px"
      >
        <div className="skillset-card-wrapper">
          <div className="skillset-card">
          <FlexBox>
            <div className="skillset-progress-container">
              <TextPill text={skill.grade} />
              <SkillProgress
                percentage={skill.percent}
                strokeWidth={16}
                textClass="caption"
              />
            </div>
              <FlexBox direction="column" alignItems="center" justifyContent="center" width="100%">
                <Text text={skill.title} typography={Typography.SubtitlePrimary} color={Colors.AluminorGray}/>
                <div className="skillset-title-line" />
              </FlexBox>
            </FlexBox>

            <div className="skillset-body-container">
                <p className="body-text-titanium">{skill.body}</p>
              </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default SkillSetCard;
