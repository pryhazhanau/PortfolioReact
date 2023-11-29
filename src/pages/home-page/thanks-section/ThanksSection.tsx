import { motion, easeOut } from "framer-motion";
import "./ThanksSection.css";
import PixelHeart from "./pixel-heart/PixelHeart";
import { FC, ReactNode, useEffect, useState } from "react";
import FlexBox from "../../../components/common/box/FlexBox";
import Text from "../../../components/common/style/Text";
import { Typography } from "../../../components/common/style/interface/Typography";
import { Colors } from "../../../components/common/style/interface/Colors";
import { InViewScale } from "../../../components/common/animation/in-view/InViewScale";
import { InViewSlide } from "../../../components/common/animation/in-view/InViewSlide";

const ThanksSection = () => {
  return (
    <FlexBox className="thanks-section">
      <FlexBox className="thanks-section-background">
      </FlexBox>
      <FlexBox className="thanks-section-wrapper">
        <FlexBox justifyContent="space-between" alignItems="end">
          <InViewScale duration={0.3} initialScale={0}>
            <HeartBeatMotion>
              <PixelHeart />
            </HeartBeatMotion>
          </InViewScale>
        </FlexBox>
        <FlexBox direction="column" alignItems="center">
          <InViewSlide direction="right">
            <Text
              text="Thank you for visiting"
              typography={Typography.Title}
              color={Colors.AluminorGray}
              textAlign="center"
            />
          </InViewSlide>
          <FlexBox className="thanks-section-devider" />
          <InViewSlide direction="left">
            <Text
              text="Thank you very much and see you on the next project."
              typography={Typography.BodyText}
              color={Colors.TitaniumGray}
              textAlign="center"
            />
          </InViewSlide>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

interface HeartBeatMotionProps {
  children: ReactNode;
}

const HeartBeatMotion: FC<HeartBeatMotionProps> = (props) => {
  const [isBeating, setIsBeating] = useState(false);

  const heartbeatVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 5,
      },
    },
    beat: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBeating((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      variants={heartbeatVariants}
      initial="rest"
      animate={isBeating ? "beat" : "rest"}
    >
      {props.children}
    </motion.div>
  );
};

export default ThanksSection;