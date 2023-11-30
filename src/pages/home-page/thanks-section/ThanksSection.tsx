import { motion, easeOut } from "framer-motion";
import "./ThanksSection.css";
import PixelHeart from "./pixel-heart/PixelHeart";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import FlexBox from "../../../components/common/box/FlexBox";
import Text from "../../../components/common/style/Text";
import { Typography } from "../../../components/common/style/interface/Typography";
import { Colors } from "../../../components/common/style/interface/Colors";
import { InViewScale } from "../../../components/common/animation/in-view/InViewScale";
import { InViewSlide } from "../../../components/common/animation/in-view/InViewSlide";

const BEAT_INTERVAL_S = 4;

const ThanksSection = () => {
  return (
    <FlexBox className="thanks-section">
      <FlexBox className="thanks-section-background"></FlexBox>
      <FlexBox className="thanks-section-wrapper">
        <FlexBox justifyContent="space-between" alignItems="end">
          <InViewScale duration={0.3} initialScale={0}>
            <HeartBeatMotion>
              <PixelHeart beatIntervalS={BEAT_INTERVAL_S} />
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

  let beatDuration = 0.5;
  const heartbeatVariants = {
    rest: {
      scale: 1,
    },
    beat: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: {
        duration: beatDuration,
        ease: easeOut,
      },
    },
  };

  let beatIntervalTimer = useRef<any | null>(null);
  const startBeat = (interval: number) => {
    clearInterval(beatIntervalTimer.current)
    const intervalId = setInterval(() => {
      setIsBeating((prev) => !prev);
    }, interval / 2 - beatDuration * 1000);
    return intervalId;
  };

  useEffect(() => {
    beatIntervalTimer.current = startBeat((BEAT_INTERVAL_S + 1) * 1000);

    return () => {
      if (beatIntervalTimer.current) {
        clearInterval(beatIntervalTimer.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    const enterIntervalId = startBeat(2000);
    beatIntervalTimer.current = enterIntervalId;
  };

  const handleMouseLeave = () => {
    const leaveIntervalId = startBeat((BEAT_INTERVAL_S + 1) * 1000);
    beatIntervalTimer.current = leaveIntervalId;
  };

  return (
    <motion.div
      variants={heartbeatVariants}
      initial="rest"
      animate={ isBeating ? "beat" : "rest" }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </motion.div>
  );
};

export default ThanksSection;
