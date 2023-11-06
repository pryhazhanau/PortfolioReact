import { FC } from "react";
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
  return (
    <>
      <div className="year-container" style={{ marginTop: `${topOffset}`}}>
        <div className="career-item-container" style={{ flexDirection: `${rightToLeft ? "row-reverse" : "row"}` }}>
          <div className="career-item-img">
            <img src={img}/>
          </div>
          <div className="career-item-content">
            <p className="subtitle-primary-aluminor">{title}</p>
            <p className="body-text-aluminor">{text}</p>
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
