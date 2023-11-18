import "./SkillProgress.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import "react-circular-progressbar/dist/styles.css";

interface CircularProgressBarProps {
  percentage: number;
  text?: string;
  strokeWidth: number;
  size?: Size;
  textClass?: string
}

const SkillProgress: React.FC<CircularProgressBarProps> = ({
  percentage,
  text,
  strokeWidth,
  textClass
}) => {
  const [value, setPercentage] = useState(0);

  const handleInView = (valueInView: boolean) => {
    if (valueInView) {
      setPercentage(percentage)
    }
  };

  return (
    <InView as="div" triggerOnce onChange={(inView) => handleInView(inView)}>
    <div className="skill-progress-wrapper">
    <CircularProgressbarWithChildren
      value={value}
      strokeWidth={strokeWidth}
      styles={buildStyles({
        strokeLinecap: "round",
        pathColor: `var(--velaro--text)`,
        trailColor: "var(--background--secondary)",
        pathTransitionDuration: 2
      })}
    >
      <p className={`skill-name subtitle-primary ${textClass}`}>{text != null ? text : `${percentage}%`}</p>
    </CircularProgressbarWithChildren>
    </div>
  </InView>
  );
};

export default SkillProgress;
