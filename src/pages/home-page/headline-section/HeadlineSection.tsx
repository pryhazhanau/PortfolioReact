import "./HeadlineSection.css";
import BackgroundImg from "../../../assets/illustrations/headline-background-noise.png";
import GridBackground from "./grid-background/GridBackground";
import GridContent from "./grid-content/GridContent";
import FlexBox from "../../../components/common/box/FlexBox";
import { MouseEvent, useEffect, useState } from "react";
import Image from "../../../components/common/style/Image";
import GridContentMobile from "./grid-content/GridContentMobile";
import GridBackgroundMobile from "./grid-background/GridBackgroundMobile";

const mobileWidth = 650;

function HeadlineSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {windowWidth > mobileWidth ? (
        <HeadlineComponent />
      ) : (
        <HeadlineMobileComponent />
      )}
    </>
  );
}

const HeadlineComponent = () => {
  const [tranlationContent, setTranslationContent] = useState({ x: 0, y: 0 });
  const [tranlationBackground, setTranslationBackground] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;

    setTranslationContent(getTranlationForContent({ x, y }));
    setTranslationBackground(getTranlationForBackground({ x, y }));
  };

  const handleMouseLeave = () => {
    setTranslationContent({ x: 0, y: 0 });
    setTranslationBackground({ x: 0, y: 0 });
  };

  return (
    <FlexBox
      className="headline-container"
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding={{ top: "var(--navbar-height)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FlexBox className="headline-background-wrapper">
        <Image className="headline-background" src={BackgroundImg} />
        <Image className="headline-background-grayscale" src={BackgroundImg} />
      </FlexBox>
      <FlexBox className="headline-wrapper">
        <FlexBox width="100%" height={"100vh"}>
          <GridContent
            translateX={tranlationContent.x}
            translateY={tranlationContent.y}
          />
          <GridBackground
            translateX={tranlationBackground.x}
            translateY={tranlationBackground.y}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

const HeadlineMobileComponent = () => {
  return (
    <FlexBox
      className="headline-container"
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding={{ top: "var(--navbar-height)" }}
    >
      <FlexBox className="headline-background-wrapper">
        <Image className="headline-background" src={BackgroundImg} />
        <Image className="headline-background-grayscale" src={BackgroundImg} />
      </FlexBox>
      <FlexBox className="headline-wrapper">
        <FlexBox width="100%" height={"100vh"}>
          <GridContentMobile />
          <GridBackgroundMobile />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

function getTranlationForContent(mousePosition: Point) {
  return { x: mousePosition.x * -8, y: mousePosition.y * -8 };
}

function getTranlationForBackground(mousePosition: Point) {
  return { x: mousePosition.x * -4, y: mousePosition.y * -4 };
}

export default HeadlineSection;
