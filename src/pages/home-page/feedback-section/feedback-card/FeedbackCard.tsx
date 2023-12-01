import "./FeedbackCard.css";
import { FC } from "react";
import Quotes from "../../../../assets/quotes.svg"
import Text from "../../../../components/common/style/Text";
import { Typography } from "../../../../components/common/style/interface/Typography";
import { Colors } from "../../../../components/common/style/interface/Colors";

interface CardProps {
  img: any;
  body: string;
  description: string;
}

const FeedbackCard: FC<CardProps> = ({ img, body, description }) => {
  return (
    <>
      <div className="feedback-card-container">
        <div className="feedback-card-wrapper">
          <div className="feedback-card-image">
            <img src={img} />
          </div>
          <div className="feedback-card-quote">
            <Text text={body} typography={Typography.Quote} color={Colors.TitaniumGray} textAlign="center"/>
          </div>
          <div className="feedback-card-name">
            <p className="body-text-bold">{description}</p>
          </div>
        </div>
        <div className="quotes-background">
            <img src={Quotes}></img>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
