import "./SectionTitle.css"
import { FC } from "react"
import Text from "../style/Text"
import { Typography } from "../style/interface/Typography"
import { Colors } from "../style/interface/Colors"
import FlexBox from "../box/FlexBox"
import { InViewSlide } from "../animation/in-view/InViewSlide"

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
      <InViewSlide direction="bottom" delay={0.7} transition={50}>
        <div className="section-pill">
          <p className="section-pill-text description">
            {sectionName.toUpperCase()}
          </p>
        </div>
      </InViewSlide>
      <InViewSlide direction="left" delay={0.2}>
        <Text
          text={sectionDesc}
          typography={Typography.Title}
          color={Colors.AluminorGray}
          margin={{ top: 20, bottom: 6 }}
          maxWidth={500}
        />
      </InViewSlide>
      <InViewSlide direction="right" delay={0.4}>
        <div className="section-title-devider "></div>
      </InViewSlide>
    </FlexBox>
  )
}

export default SectionTitle
