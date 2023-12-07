import { FC } from "react"
import FlexBox from "../../../components/common/box/FlexBox"
import Text from "../../../components/common/style/Text"
import { Typography, TypographyStyle } from "../../../components/common/style/interface/Typography"
import { Colors } from "../../../components/common/style/interface/Colors"

interface CareerTitleProps {
    fromDate: string
    toDate: string
    companyName: string;
    location: string;
}

const CareerTitle: FC<CareerTitleProps> = (props) => {
  return (
    <FlexBox
      className="career-title"
      direction="column"
      gap={25}
      margin={{ top: "calc(var(--navbar-height) + 50px)", bottom: 48}}
    >
      <Text
        text={`${props.fromDate} - ${props.toDate}`}
        typography={Typography.ArticleTitle}
        color={Colors.AluminorGray}
        margin={{ top: 0, bottom: 0 }}
      />
      <FlexBox direction="column" gap={10}>
        <Text
          text={props.companyName}
          typography={Typography.SubtitlePrimary}
          color={Colors.TitaniumGray}
          margin={{ top: 0, bottom: 0 }}
        />
        <Text
          text={props.location}
          typography={LocationTypograpy}
          color={Colors.SpaceroGray}
          margin={{ top: 0, bottom: 0 }}
        />
      </FlexBox>
    </FlexBox>
  )
}

const LocationTypograpy: TypographyStyle = {
    fontFamily: "Poppins, san-serif",
    fontSize: "16px",
    fontWeight: 400,
}

export default CareerTitle
