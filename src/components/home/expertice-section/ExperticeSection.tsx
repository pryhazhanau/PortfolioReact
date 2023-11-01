import "./ExperticeSection.css";
import "../Home.css";
import "../../../common/css/div-layout.css";
import TechBlock from "./tech-block/TechBlock";
import { useState } from "react";

function ExperticeSection() {
  var initialText: string = "Utilized technoligies I use";
  var [text, setText] = useState(initialText);
  const [animationClass, setAnimationClass] = useState('');

  const handleMouseEnter = (tech: string) => {
    setAnimationClass('changed');
    setText(tech);
  };

  const handleMouseLeave = () => {
    setAnimationClass('');
    setText(initialText);
  };

  const topTechItems = techList.slice(0, 3);
  const bottomTechItems = techList.slice(4, 7);

  return (
    <>
      <div className="expertice-container">
        <h1 className="headline section-title">Expertice</h1>
        <div className="grid-container">
          <div className="grid-system">
            <div className="grid">
              <div className="grid-item-mw grid-cell-section">
                <div className="title-tech-stack-block">
                  <p className={`subtitle-primary ${animationClass}`}>{text}</p>
                </div>
              </div>
              <div className="grid-item-sw grid-cell-middle"></div>
              {topTechItems.map((item) => (
                <div key={item.id} className="grid-item-sw grid-cell-middle">
                  <TechBlock
                    onMouseEnter={(tech) => handleMouseEnter(tech)}
                    onMouseLeave={() => handleMouseLeave()}
                    tech={item.name}
                  />
                </div>
              ))}

              {bottomTechItems.map((item) => (
                <div key={item.id} className="grid-item-sw grid-cell-last-row">
                  <TechBlock
                    onMouseEnter={(tech) => handleMouseEnter(tech)}
                    onMouseLeave={() => handleMouseLeave()}
                    tech={item.name}
                  />
                </div>
              ))}
              <div className="grid-item-sw grid-cell-last-row"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const techList = [
  { id: 0, name: "swift" },
  { id: 1, name: "test-flight" },
  { id: 2, name: "xcode"},
  { id: 3, name: "figma" },
  { id: 4, name: "github" },
  { id: 5, name: "bitrise" },
  { id: 6, name: "fastlane" },
];

export default ExperticeSection;
