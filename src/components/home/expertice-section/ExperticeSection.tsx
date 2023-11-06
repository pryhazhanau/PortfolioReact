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

function ExperticeSection() {
  var initialText: string = "Utilized key technoligies I use";
  var [text, setText] = useState(initialText);
  var [sectionId, setSectionId] = useState(0);
  var [sectionName, setSectionName] = useState("architectures");
  var [titlePostfix, setTitlePostfix] = useState("I use");

  const handleMouseEnter = (tech: string) => {
    setText(tech);
  };

  const handleMouseLeave = () => {
    setText(initialText);
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
                <div className="title-tech-stack-block">
                  <AnimatedTextCommon animKey={text}>
                    <p className="subtitle-primary">{text}</p>
                  </AnimatedTextCommon>
                </div>
              </div>
              <div className="grid-item-sw grid-cell-middle"></div>
              {topTechItems.map((item) => (
                <div key={item.id} className="grid-item-sw grid-cell-middle">
                  <TechBlock
                    name={item.name}
                    imgSrc={item.img}
                    onMouseEnter={(tech) => handleMouseEnter(tech)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => openLink(item.url)}
                  />
                </div>
              ))}

              {bottomTechItems.map((item) => (
                <div key={item.id} className="grid-item-sw grid-cell-last-row">
                  <TechBlock
                    name={item.name}
                    imgSrc={item.img}
                    onMouseEnter={(tech) => handleMouseEnter(tech)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => openLink(item.url)}
                  />
                </div>
              ))}
              <div className="grid-item-sw grid-cell-last-row"></div>
              <div className="grid-item-sw grid-cell-last-row"></div>
            </div>
            <div className="grid-item-devider-area"></div>
            <div className="grid-large">
              <div className="grid-section-title">
                  <AnimatedTextCommon animKey={`${sectionId}`}>
                <p className="subtitle-primary">
                  More about{" "}
                    <span>{sectionName}</span> {titlePostfix}
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
                  <FadeInOutBox visible={sectionId === 0} className="grid-item-animation-wrapper">
                    <ArchitecturesBlock />
                  </FadeInOutBox>
                  <FadeInOutBox visible={sectionId === 1}>
                    <FrameworksBlock />
                  </FadeInOutBox>
                {sectionId === 3 && null}
                {sectionId === 4 && null}
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

const techList = [
  { id: 0, name: "Swift", url: "#", img: Swift },
  { id: 1, name: "Test Flight", url: "#", img: TestFlight },
  { id: 2, name: "Xcode", url: "#", img: Xcode },
  { id: 3, name: "Figma", url: "#", img: Figma },
  { id: 4, name: "Github", url: "#", img: Github },
  { id: 5, name: "Bitrise", url: "#", img: Bitrise },
  { id: 6, name: "Fastlane", url: "#", img: Fastlane },
  { id: 7, name: "Firebase", url: "#", img: Firebase },
];

export default ExperticeSection;
