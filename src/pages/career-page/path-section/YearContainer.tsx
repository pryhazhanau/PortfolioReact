import { FC, useEffect, useState } from "react";
import "./YearContainer.css";

interface YearContainerProps {
  year: string
  title: string;
  text: string;
  img: string;
  topOffset?: string;
  rightToLeft?: boolean;
}

const YearContainer: FC<YearContainerProps> = ({ year, title, text, img, topOffset, rightToLeft }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="year-container" style={{ marginTop: `${topOffset}`}}>
        <div className="career-item-container" style={{ flexDirection: `${windowWidth > 800 ? (rightToLeft ? "row-reverse" : "row") : "column"}` }}>
          <div className="career-item-img">
            <img src={img}/>
          </div>
          <div className="career-item-content">
            <p className={windowWidth > 800 ? "subtitle-primary-aluminor" : "body-bold-aluminor"}>{title}</p>
            <p className="body-text-spacero">{text}</p>
          </div>
        </div>
        <div className="year-headline-container">
          <p className="headline">{year}</p>
        </div>
      </div>
    </>
  );
};

export default YearContainer;
