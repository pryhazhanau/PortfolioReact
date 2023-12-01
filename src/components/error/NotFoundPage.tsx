import "./NotFoundPage.css";
import ActionButton from "../common/controls/action-button/ActionButton";
import FlexBox from "../common/box/FlexBox";
import Text from "../common/style/Text";
import { Typography } from "../common/style/interface/Typography";
import { Colors } from "../common/style/interface/Colors";
import { FC, useEffect } from "react";

interface NotFoundPageProps {
  onMount: () => void;
  onUnmount: () => void;
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  useEffect(() => {
    props.onMount()
    return () => {
      props.onUnmount()
    }
  })

  return (
    <div className="error-404-page-wrapper">
      <div className="error-404-background"></div>
      <div className="text-container">404</div>
      <FlexBox
        className="error-content-container"
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexBox direction="column" alignItems="center">
          <Text
            text="PAGE NOT FOUND"
            typography={Typography.SubtitlePrimary}
            color={Colors.BackgroundSecondary}
            textAlign="center"
          />
            <Text
              text="Sorry, I can’t find the page you are looking for"
              textAlign="center"
              typography={Typography.BodyText}
              color={Colors.BackgroundSecondary}
            />
          </FlexBox>
        <FlexBox margin={{ bottom: 100 }}>
          <ActionButton label="Back to home" link="/" />
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export default NotFoundPage