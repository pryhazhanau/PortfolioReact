import "./FeedbackSection.css";
import "../HomePage.css";
import FeedbackCard from "./feedback-card/FeedbackCard"

function FeedbackSection() {
  return (
    <>
      <div className="feedback-container">
        <div className="feedback-wrapper">
            <div className="feedback-text-container">
            <h1 className="headline section-title">Feedbacks</h1>
            <div className="feedback-body-container">
                <p className="body-text-spacero">The feedback from people I worked with with pleasure.</p>
            </div>
            </div>
            <div className="feedback-cards-container">
                {
                    feedbacksList.map((item) => (
                        <FeedbackCard body={item.body} description={item.description} img={item.img}/>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  );
}

import Arseny from "../../../assets/feedback/arseny.jpeg"
import Roma from "../../../assets/feedback/roma.jpg"

const feedbacksList = [
    { id: 0, description: "Arseni Vasilevski —\n Project Manager @Andersen", body: "You make a customer's vision a reality. Pleasant soft-skills, self-driven, reliable, true senior and perspective Teach Lead. Satisfied customers. Supportive team-member. Creative thinker.", img: Arseny },
    { id: 0, description: "Roman Bakenbard — Lead Software Engineer @Constanta", body: "Outstanding iOS developer - As great in problem-solver as a team play, and a dedicated project leader.", img: Roma }
]

export default FeedbackSection;
