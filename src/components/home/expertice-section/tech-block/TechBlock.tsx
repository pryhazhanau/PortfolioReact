import { ReactSVG } from "react-svg";
import React, { useState } from "react";
import "./TechBlock.css";

import Xcode from "../../../../assets/technology/Xcode.svg";
import TestFlight from "../../../../assets/technology/TestFlight.svg";
import Figma from "../../../../assets/technology/Figma.svg";
import Github from "../../../../assets/technology/GitHub.svg";
import Bitrise from "../../../../assets/technology/Bitrise.svg";
import Fastlane from "../../../../assets/technology/Fastlane.svg";
import Swift from "../../../../assets/technology/Swift.svg";

interface TechBlockProps {
  tech: string;
  onMouseEnter: (techName: string) => void;
  onMouseLeave: () => void;
}

const TechBlock: React.FC<TechBlockProps> = ({ tech, onMouseEnter, onMouseLeave }) => {
  var img: any = null;
  var displayName: string = "null";

  switch (tech.toLowerCase()) {
    case "xcode":
      img = Xcode;
      displayName = "Xcode";
      break;
    case "test-flight":
      img = TestFlight;
      displayName = "Test Flight";
      break;
    case "figma":
      img = Figma;
      displayName = "Figma";
      break;
    case "github":
      img = Github;
      displayName = "Github";
      break;
    case "bitrise":
      img = Bitrise;
      displayName = "Bitrise";
      break;
    case "fastlane":
      img = Fastlane;
      displayName = "Fastlane";
      break;
    case "swift":
      img = Swift;
      displayName = "SwiftUI";
      break;
    default:
      break;
  }

  const handleMouseEnter = () => {
    onMouseEnter(displayName)
  };

  const handleMouseLeave = () => {
    onMouseLeave()
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="tech-block-wrapper"
      >
        <ReactSVG className="tech-svg" src={img} />
        <p className="caption">{displayName}</p>
      </div>
    </>
  );
};

export default TechBlock;
