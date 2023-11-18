import "./SkillsetSection.css";
import "../HomePage.css";
import "../../../common/css/div-layout.css";
import SkillSetCard from "../../../components/skillset-card/SkillsetCard";
import Carousel from "../../../components/carousel/Carousel";

function SkillsetSection() {
  return (
    <>
      <div className="skillset-container">
        <h1 className="headline section-title">Skillset</h1>
        <p className="body-text-spacero skill-set-desc">
          Throughout my IT career, I've cultivated a versatile skillset that
          encompasses core competencies crucial to the field. These skills,
          refined through years of experience, form the bedrock of my
          professional journey.
        </p>
        <div className="skill-box">
          <Carousel>
            {skillCards.map((item) => (
              <div key={item.id}>
                <SkillSetCard skill={item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default SkillsetSection;

const skillCards: SkillCardObj[] = [
  {
    id: 0,
    title: "Swift",
    body: "With nearly five years of experience in Swift development, I have cultivated a profound appreciation for this language. My expertise lies in crafting sophisticated solutions, leveraging advanced features, and designing unconventional user interfaces.",
    grade: "expert",
    percent: 100,
  },
  {
    id: 1,
    title: "UI/UX",
    body: "I am proficient in design tools like Adobe XD, Figma, and Sketch, I stay abreast of UI/UX trends. I consider that UI and UX design is a crucial part of the product success.",
    grade: "intermediate",
    percent: 50,
  },
  {
    id: 2,
    title: "Agile",
    body: "Throughout the majority of my career, I have applied Agile methodologies, especially on Scrum. My experience within this methodology allowing me to adeptly adhere to best practices in team collaboration.",
    grade: "advanced",
    percent: 70,
  },
  {
    id: 3,
    title: "SwiftUI",
    body: "Advanced in SwiftUI, I specialize in crafting sophisticated, user-centric interfaces. Leveraging advanced features and an innovative approach, I push the boundaries of iOS development to create elegant solutions quickly and efficiently.",
    grade: "advanced",
    percent: 80,
  },
  {
    id: 4,
    title: "Team work",
    body: "A highly effective team player, I thrive in collaborative environments, fostering open communication and synergy. My ability to listen, contribute, and adapt enhances team dynamics, resulting in cohesive and successful project outcomes.",
    grade: "expert",
    percent: 100,
  },
];
