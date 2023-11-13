import ActionButton from "../../../common/controls/action-button/ActionButton";
import "./ExperienceBlock.css";

function ExperienceBlock() {
  return (
    <div className="experience-block">
      <div className="experience-text-block">
        <p className="body-text-spacero">
          I have started my IT career as an Automation Quality Assurance Engineer at{" "}
          <a className="link-text-img" href="https://www.epam.com" target="_blank">
            EPAM Systems
          </a>
          . During 2 years I have been writing automation test for iOS and
          Android on Java and Javascript. I was also interested in iOS
          Development. My creer as an iOS Developer was started. I have finished five
          projects and was a part of two large cross-function product team.
        </p>
      </div>

      <div className="experience-button-wrapper">
        <ActionButton label="More" style="outline" link="/career" />
      </div>
    </div>
  );
}

export default ExperienceBlock;
