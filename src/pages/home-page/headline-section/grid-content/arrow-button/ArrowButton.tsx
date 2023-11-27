import "./ArrowButton.css"
import { useEffect, useState } from "react";
import ArrowTopRight from "../../../../../assets/icons/arrow-top-right-thin.svg";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { TypographyStyle } from "../../../../../components/common/style/interface/Typography";
import Text from "../../../../../components/common/style/Text";
import FlexBox from "../../../../../components/common/box/FlexBox";
import { Colors } from "../../../../../components/common/style/interface/Colors";

const ArrowButton = ({ text, onClick }: { text: string, onClick: () => void }) => {
    const [isActive, setIsActive] = useState(false);
  
  
    const buttonTypography: TypographyStyle = {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: 'calc(var(--headline) * 1.1)',
    }
  
    const handleMouseEnter = () => {
      setIsActive(true);
    };
  
    const handleMouseLeave = () => {
      setIsActive(false);
    };
  
    return (
      <FlexBox
        className="headline-arrow-button"
        height={50}
        justifyContent="center"
        alignItems="center"
        gap={24}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <Text
          text={text}
          typography={buttonTypography}
          color={Colors.AluminorGray}
        />
        <ArrowAnimation isActive={isActive}/>
      </FlexBox>
    );
  };

  export default ArrowButton
  
  const ArrowAnimation = ({ isActive }: { isActive: boolean }) => {
      
    const arrowSize = { width: 24, height: 24 };
    const duration = 0.3
  
    const containerStyle: React.CSSProperties = {
      position: "relative",
      width: arrowSize.width,
      height: arrowSize.height,
      overflow: "hidden",
    };
  
    const arrowStyle: React.CSSProperties = {
      position: "absolute",
      cursor: "pointer",
      width: arrowSize.width,
      height: arrowSize.height,
    };
  
    const arrow1Variants = {
      initial: { x: 0, y: 0, transition: { duration: duration }  },
      hover: { x: "200%", y: "-200%", transition: { duration: duration } },
    };
  
    const arrow2Variants = {
      initial: { x: "-200%", y: "200%" , transition: { duration: duration } },
      hover: { x: 0, y: 0, transition: { duration: duration } },
    };
  
    const controls1 = useAnimation();
    const controls2 = useAnimation();
  
    useEffect(() => {
      if (isActive) {
        controls1.start('hover');
        controls2.start('hover');
      } else {
        controls1.start('initial');
        controls2.start('initial');
      }
    }, [isActive, controls1, controls2]);
  
    return (
      <motion.div
        style={containerStyle}
      >
        <motion.img
          src={ArrowTopRight}
          alt="Arrow"
          style={{ ...arrowStyle }}
          variants={arrow1Variants}
          initial="initial"
          animate={controls1}
        />
  
        <motion.img
          src={ArrowTopRight}
          alt="Arrow"
          style={{ ...arrowStyle }}
          variants={arrow2Variants}
          initial="initial"
          animate={controls2}
        />
      </motion.div>
    );
  };