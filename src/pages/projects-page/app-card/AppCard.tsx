import "./AppCard.css";
import { FC, useState } from "react";
import FlexBox from "../../../components/common/box/FlexBox";
import Text from "../../../components/common/style/Text";
import { Typography } from "../../../components/common/style/interface/Typography";
import { Colors } from "../../../components/common/style/interface/Colors";
import { ReactSVG } from "react-svg";

import ArrowRight from "../../../assets/icons/long-arrow-right.svg"
import UrlOpener from "../../../components/common/util/UrlOpener";

interface AppCardProps {
  app: AppProject
}

const AppCard: FC<AppCardProps> = ({app}) => {
  const [isCardActive, setCardActive] = useState(false)

  const HandleMouseEnter = () => {
    setCardActive(true)
  }

  const HandleMouseLeave = () => {
    setCardActive(false)
  }

  return (
    <div className={`app-card ${app.link ? "cursor-pointer" : "cursor-default"}`} onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} onClick={() => {UrlOpener.openUrl(app.link)}}>
      <div className="app-card-blueprint"/>
      <div>
        <FlexBox className="card-icon-app-wrapper" direction="column" alignItems="center" gap={24}>
          <img src={app.img} style={{opacity: `${isCardActive ? 1 : 0.5}`}}></img>
          <Text className="" text={app.title} typography={Typography.SubtitlePrimary} color={isCardActive ? Colors.AluminorGray : Colors.SpaceroGray}/>
        </FlexBox>
        <FlexBox className="card-body-wrapper">
          <Text text={app.body} typography={Typography.BodyText} color={Colors.TitaniumGray} textAlign="center"></Text>
        </FlexBox>
      </div>
      
      <FlexBox width="100%" justifyContent="end">
        <FlexBox width={100}>
        { app.link ? (
        <ExploreArrow isActive={isCardActive}/>
        ) : (
          <Text text="Unavailable" typography={Typography.BodyText} color={Colors.SpaceroGray}/>
        )}
        </FlexBox>
      </FlexBox>
    </div>
  );
}

const ExploreArrow = ({ isActive }: { isActive: boolean }) => {
    return (
      <FlexBox className="explore-arrow" height={50} justifyContent="center" alignItems="center" gap={isActive ? 24 : 12}>
        <Text text="Explore" typography={Typography.BodyText} color={isActive ? Colors.AluminorGray : Colors.SpaceroGray}/>
        <ReactSVG className={`appcard-arrow-right ${isActive ? "fill-aluminor" : "fill-spacero"}`} src={ArrowRight}/>
      </FlexBox>
    )
}

export default AppCard;
