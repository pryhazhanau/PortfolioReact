import { ReactSVG } from "react-svg";
import React from "react";
import "./TechBlock.css";
import TechObject from "./TechObject";

interface TechBlockProps {
  techObject: TechObject
  onMouseEnter: (tech: TechObject) => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const TechBlock: React.FC<TechBlockProps> = ({ techObject, onMouseEnter, onMouseLeave, onClick }) => {
  const handleMouseEnter = () => {
    onMouseEnter(techObject)
  };

  const handleMouseLeave = () => {
    onMouseLeave()
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="tech-block-wrapper"
      >
        <ReactSVG className="tech-svg" src={techObject.img} />
        <p className="caption">{techObject.name}</p>
      </div>
    </>
  );
};

export default TechBlock;
