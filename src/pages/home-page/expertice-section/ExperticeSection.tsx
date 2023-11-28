import "./ExperticeSection.css";
import "../HomePage.css";
import "../../../common/css/div-layout.css";
import SectionTitle from "../../../components/common/section-title/SectionTitle";
import TechBlock from "./tech-block/TechBlock";
import { useState } from "react";
import GridButtonsBlock from "./buttons-block/GridButtonsBlock";
import FadeInOutBox from "../../../components/common/animation/FadeInOutBox";
import AnimatedTextCommon from "../../../components/common/animation/AnimatedTextCommon";
import ArchitecturesBlock from "./architectures-block/ArchitecturesBlock";
import FrameworksBlock from "./frameworks-block/FrameworksBlock";
import TechObject from "./tech-block/TechObject";
import ProjectsBlock from "./projects-block/ProjectsBlock";
import ExperienceBlock from "./experience-block/ExperienceBlock";
import Text from "../../../components/common/style/Text";
import { Typography } from "../../../components/common/style/interface/Typography";
import { Colors } from "../../../components/common/style/interface/Colors";
import { TechList } from "./TechList";
import { InViewSlide } from "../../../components/common/animation/in-view/InViewSlide";

function ExperticeSection() {
  const initialJSX: JSX.Element = (
    <p className="subtitle-primary">Utilized key technoligies I use</p>
  );

  const [techObject, setTechObject] = useState<TechObject | undefined>(
    undefined
  );
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

  const topTechItems = TechList.slice(0, 4);
  const bottomTechItems = TechList.slice(4, TechList.length);

  return (
    <>
      <div className="expertice-container page-section">
        <SectionTitle
          sectionName="Expertise"
          sectionDesc="Skilled in tech, adept at overcoming challenges"
        />
        <InViewSlide direction="right">
        <Text
          text={BodyText}
          typography={Typography.BodyText}
          color={Colors.TitaniumGray}
          margin={{bottom: 60}}
          maxWidth={600}
        />
        </InViewSlide>
        <div className="grid-container">
          <div className="grid-system">
            <div className="grid">
              <div className="grid-item-mw grid-cell-section">
                <AnimatedTextCommon
                  className="title-tech-stack-wrapper"
                  animKey={techObject ? techObject.name : ""}
                >
                  {techObject ? techObject.jsxElement : initialJSX}
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

const BodyText = `Experienced in iOS development and UI/UX design, I bring a collaborative spirit to every project. My expertise lies in creating seamless, user-centric experiences, and I thrive in teamwork environments, ensuring successful outcomes through effective communication and shared goals.`;

export default ExperticeSection;
