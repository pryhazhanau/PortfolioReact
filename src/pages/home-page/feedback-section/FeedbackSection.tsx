import "./FeedbackSection.css";
import "../HomePage.css";
import FeedbackCard from "./feedback-card/FeedbackCard";
import SectionTitle from "../../../components/common/section-title/SectionTitle";
import FlexBox from "../../../components/common/box/FlexBox";
import Text from "../../../components/common/style/Text";
import { Typography } from "../../../components/common/style/interface/Typography";
import { Colors } from "../../../components/common/style/interface/Colors";

import Arseny from "../../../assets/feedback/arseny.jpeg";
import Roma from "../../../assets/feedback/roma.jpg";

function FeedbackSection() {
  return (
    <div className="page-section">
      <FlexBox
        className="feedback-wrapper"
        gap={30}
        alignItems="start"
        justifyContent="start"
      >
        <FlexBox direction="column" maxWidth={500}>
          <SectionTitle
            sectionName="Feedback"
            sectionDesc="What they are saying"
          />
          <Text
            text="A feedback from people I worked with with pleasure."
            typography={Typography.BodyText}
            color={Colors.SpaceroGray}
          />
        </FlexBox>
        <FlexBox
          className="feedback-cards-container"
          gap={60}
          width="100%"
          justifyContent="center"
        >
          {feedbacksList.map((item) => (
            <div key={`${item.id}`}>
              <FeedbackCard
                body={item.body}
                description={item.description}
                img={item.img}
              />
            </div>
          ))}
        </FlexBox>
      </FlexBox>
    </div>
  );
}

const feedbacksList = [
  {
    id: 0,
    description: "Arseni Vasilevski —\n Project Manager @Andersen",
    body: "You make a customer's vision a reality. Pleasant soft-skills, self-driven, reliable, true senior and perspective Teach Lead. Satisfied customers. Supportive team-member. Creative thinker.",
    img: Arseny,
  },
  {
    id: 1,
    description: "Roman Bakenbard — Lead Software Engineer @Constanta",
    body: "Outstanding iOS developer - As great in problem-solver as a team play, and a dedicated project leader.",
    img: Roma,
  },
];

export default FeedbackSection;
