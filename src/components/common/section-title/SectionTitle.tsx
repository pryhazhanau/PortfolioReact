import "./SectionTitle.css"
import { FC } from "react";
import Text from "../../common/style/Text"
import { Typography } from "../style/interface/Typography";
import { Colors } from "../style/interface/Colors";
import FlexBox from "../box/FlexBox";

interface SectionTitleProps {
    sectionName: string;
    sectionDesc: string;
}

const SectionTitle: FC<SectionTitleProps> = ({sectionName, sectionDesc}) => {
    return (
        <FlexBox direction="column" justifyContent="start" alignItems="start" margin={{bottom: 30, top: 30}}>
            <div className="section-pill">
                <p className="section-pill-text description">{sectionName}</p>
            </div>
            <Text text={sectionDesc} typography={Typography.SubtitlePrimary} color={Colors.AluminorGray} margin={{top: 20, bottom: 6}} maxWidth={500}/>
            <div className="section-title-devider "></div>
        </FlexBox>
    )
}

export default SectionTitle