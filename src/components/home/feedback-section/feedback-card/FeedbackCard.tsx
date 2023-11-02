import "./FeedbackCard.css";

import { FC } from "react";

import Quotes from "../../../../assets/quotes.svg"

interface CardProps {
  img: any;
  body: string;
  description: string;
}

const FeedbackCard: FC<CardProps> = ({ img, body, description }) => {
  return (
    <>
      <div className="feedback-card-container">
        <div className="quotes-background">
            <img src={Quotes}></img>
        </div>
        <div className="feedback-card-wrapper">
          <div className="feedback-card-image">
            <img src={img} />
          </div>
          <div className="feedback-card-quote">
            <p className="quote">{`“${body}”`}</p>
          </div>
          <div className="feedback-card-name">
            <p className="body-text-bold">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
