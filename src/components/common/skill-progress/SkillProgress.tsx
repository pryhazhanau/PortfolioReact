import "./SkillProgress.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import React, { useState, useEffect, useRef } from 'react';
import { InView, useInView } from 'react-intersection-observer';

import "react-circular-progressbar/dist/styles.css";

interface CircularProgressBarProps {
  percentage: number;
  text: string;
  grade: string;
}

const SkillProgress: React.FC<CircularProgressBarProps> = ({
  percentage,
  text,
  grade
}) => {
  const [value, setPercentage] = useState(0);

  const handleInView = (valueInView: boolean) => {
    if (valueInView) {
      setPercentage(percentage)
    }
  };

  return (
    <>
    <InView as="div" triggerOnce onChange={(inView, entry) => handleInView(inView)}>
    <div className="skill-progress-wrapper">
    <CircularProgressbarWithChildren
      value={value}
      strokeWidth={18}
      styles={buildStyles({
        strokeLinecap: "butt",
        pathColor: `var(--velaro--accent)`,
        trailColor: "var(--background--secondary)",
        pathTransitionDuration: 2
      })}
    >
      <p className="skill-name subtitle-primary">{text}</p>
    </CircularProgressbarWithChildren>
    <div className="grade-container">
      <p className="body-text">{grade}</p>
    </div>
    </div>
  </InView>
    </>
  );
};

export default SkillProgress;
