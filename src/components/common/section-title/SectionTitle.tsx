import "./SectionTitle.css";
import { FC } from "react";
import Text from "../style/Text";
import { Typography } from "../style/interface/Typography";
import { Colors } from "../style/interface/Colors";
import FlexBox from "../box/FlexBox";

interface SectionTitleProps {
  sectionName: string;
  sectionDesc: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ sectionName, sectionDesc }) => {
  return (
    <FlexBox
      direction="column"
      justifyContent="start"
      alignItems="start"
      margin={{ bottom: 30, top: 30 }}
    >
      <FlexBox gap={12}>
        <div className="section-pill">
          <p className="section-pill-text description">{sectionName.toUpperCase()}</p>
        </div>
      </FlexBox>
      <Text
        text={sectionDesc}
        typography={Typography.Title}
        color={Colors.AluminorGray}
        margin={{ top: 20, bottom: 6 }}
        maxWidth={500}
      />
      <div className="section-title-devider "></div>
    </FlexBox>
  );
};

export default SectionTitle;
