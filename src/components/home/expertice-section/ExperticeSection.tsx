import "./ExperticeSection.css";
import "../HomePage.css";
import "../../../common/css/div-layout.css";
import TechBlock from "./tech-block/TechBlock";
import { useState } from "react";
import GridButtonsBlock from "./buttons-block/GridButtonsBlock";
import FadeInOutBox from "../../common/animation/FadeInOutBox";
import AnimatedTextCommon from "../../common/animation/AnimatedTextCommon";
import ArchitecturesBlock from "./architectures-block/ArchitecturesBlock";
import FrameworksBlock from "./frameworks-block/FrameworksBlock";
import TechObject from "./tech-block/TechObject";
import { v4 as uuidv4 } from "uuid";

function ExperticeSection() {
  const initialJSX: JSX.Element = (
    <p className="subtitle-primary">Utilized key technoligies I use</p>
  );

  const [techObject, setTechObject] = useState<TechObject | undefined>(undefined);
  const [sectionId, setSectionId] = useState(0);
  const [sectionName, setSectionName] = useState("architectures");
  const [titlePostfix, setTitlePostfix] = useState("I use");

  const handleMouseEnter = (tech: TechObject) => {
    setTechObject(tech);
  };

  const handleMouseLeave = () => {
    setTechObject(undefined);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const selectSection = (id: number, name: string, postfix: string) => {
    setSectionId(id);
    setSectionName(name.toLowerCase());
    setTitlePostfix(postfix);
  };

  const topTechItems = techList.slice(0, 4);
  const bottomTechItems = techList.slice(4, techList.length);

  return (
    <>
      <div className="expertice-container">
        <h1 className="headline section-title">Expertise</h1>
        <div className="grid-container">
          <div className="grid-system">
            <div className="grid">
              <div className="grid-item-mw grid-cell-section">
                <AnimatedTextCommon
                  className="title-tech-stack-block"
                  animKey={techObject ? techObject.name : ""}
                >
                  {techObject ?  (techObject.jsxElement) : (initialJSX)}
                </AnimatedTextCommon>
              </div>
              <div className="grid-item-sw grid-cell-middle"></div>
              {topTechItems.map((item) => (
                <div key={item.id} className="grid-item-sw grid-cell-middle">
                  <TechBlock
                    techObject={item}
                    onMouseEnter={(tech) => handleMouseEnter(tech)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => openLink(item.url)}
                  />
                </div>
              ))}

              {bottomTechItems.map((item) => (
                <div key={item.id} className="grid-item-sw grid-cell-last-row">
                  <TechBlock
                    techObject={item}
                    onMouseEnter={(tech) => handleMouseEnter(tech)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => openLink(item.url)}
                  />
                </div>
              ))}
              <div className="grid-item-sw grid-cell-last-row"></div>
            </div>
            <div className="grid-item-devider-area"></div>
            <div className="grid-large">
              <div className="grid-section-title">
                <AnimatedTextCommon animKey={`anim-key-section-${sectionId}`}>
                  <p className="subtitle-primary">
                    More about <span>{sectionName}</span> {titlePostfix}
                  </p>
                </AnimatedTextCommon>
              </div>
              <div className="grid-item-large-left grid-cell-section-large">
                <GridButtonsBlock
                  onSelectSection={(id, name, postfix) => {
                    selectSection(id, name, postfix);
                  }}
                />
              </div>
              <div className="grid-item-large-right">
                <FadeInOutBox
                  visible={sectionId === 0}
                  className="grid-item-animation-wrapper"
                >
                  <ArchitecturesBlock />
                </FadeInOutBox>
                <FadeInOutBox
                  visible={sectionId === 1}
                  className="grid-item-animation-wrapper"
                >
                  <FrameworksBlock />
                </FadeInOutBox>
                <FadeInOutBox
                  visible={sectionId === 2}
                  className="grid-item-animation-wrapper"
                >
                  <ProjectsBlock />
                </FadeInOutBox>
                <FadeInOutBox
                  visible={sectionId === 3}
                  className="grid-item-animation-wrapper"
                >
                  <ExperienceBlock />
                </FadeInOutBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Xcode from "../../../assets/technology/Xcode.svg";
import TestFlight from "../../../assets/technology/TestFlight.svg";
import Figma from "../../../assets/technology/Figma.svg";
import Github from "../../../assets/technology/GitHub.svg";
import Bitrise from "../../../assets/technology/Bitrise.svg";
import Fastlane from "../../../assets/technology/Fastlane.svg";
import Swift from "../../../assets/technology/Swift.svg";
import Firebase from "../../../assets/technology/Firebase.svg";
import Jira from "../../../assets/technology/Jira.svg";
import ProjectsBlock from "./projects-block/ProjectsBlock";
import ExperienceBlock from "./experience-block/ExperienceBlock";

const techList: TechObject[] = [
  {
    id: 0,
    name: "Swift",
    url: "https://developer.apple.com/swift",
    img: Swift,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#eb633e` }}>
        Swift
      </p>
    ),
  },
  {
    id: 1,
    name: "Test Flight",
    url: "https://developer.apple.com/testflight",
    img: TestFlight,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#3977cf` }}>
        Test Flight
      </p>
    ),
  },
  {
    id: 2,
    name: "Xcode",
    url: "https://developer.apple.com/xcode",
    img: Xcode,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#3977cf` }}>
        Xcode
      </p>
    ),
  },
  {
    id: 3,
    name: "Figma",
    url: "https://www.figma.com",
    img: Figma,
    jsxElement: (
      <>
        <p className="subtitle-primary figma-red">F</p>
        <p className="subtitle-primary figma-light-red">i</p>
        <p className="subtitle-primary figma-purple">g</p>
        <p className="subtitle-primary figma-blue">m</p>
        <p className="subtitle-primary figma-green">a</p>
      </>
    ),
  },
  {
    id: 4,
    name: "Github",
    url: "https://github.com",
    img: Github,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#5b686e` }}>
        Github
      </p>
    ),
  },
  {
    id: 5,
    name: "Bitrise",
    url: "https://bitrise.io",
    img: Bitrise,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#54227d` }}>
        Bitrise
      </p>
    ),
  },
  {
    id: 6,
    name: "Fastlane",
    url: "https://fastlane.tools",
    img: Fastlane,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#F6F6F6` }}>
        Fastlane
      </p>
    ),
  },
  {
    id: 7,
    name: "Firebase",
    url: "https://firebase.google.com",
    img: Firebase,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#f7cf56` }}>
        Firebase
      </p>
    ),
  },
  {
    id: 8,
    name: "Jira Software",
    url: "https://www.atlassian.com/software/jira",
    img: Jira,
    jsxElement: (
      <>
        <p className="subtitle-primary" style={{ color: `#417eef` }}>
          Jira <span className="subtitle-primary-aluminor">Software</span>
        </p>
      </>
    ),
  },
];

export default ExperticeSection;
