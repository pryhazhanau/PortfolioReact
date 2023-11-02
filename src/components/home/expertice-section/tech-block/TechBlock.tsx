import { ReactSVG } from "react-svg";
import React, { useState } from "react";
import "./TechBlock.css";

interface TechBlockProps {
  name: string,
  imgSrc: any
  onMouseEnter: (techName: string) => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const TechBlock: React.FC<TechBlockProps> = ({ name, imgSrc, onMouseEnter, onMouseLeave, onClick }) => {
  const handleMouseEnter = () => {
    onMouseEnter(name)
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
        <ReactSVG className="tech-svg" src={imgSrc} />
        <p className="caption">{name}</p>
      </div>
    </>
  );
};

export default TechBlock;
