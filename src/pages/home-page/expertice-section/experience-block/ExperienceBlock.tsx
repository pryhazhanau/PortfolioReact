import ActionButton from "../../../../components/common/controls/action-button/ActionButton"
import "./ExperienceBlock.css"

function ExperienceBlock() {
  return (
    <div className="experience-block">
      <div className="experience-text-block">
        <p className="body-text-titanium">
        I have started my IT career as an Automation Test Engineer at{" "}
          <a
            className="link-text-img"
            href="https://www.epam.com"
            target="_blank"
          >
            EPAM Systems
          </a>.{" "}
          During 2 years I had been writing automation test for iOS and Android on Java and Javascript.
            I was also interested in iOS Development. My journey as an iOS Developer had begun from my very first mobile application written on swift.
              Besides the small frameworks and modules, I had succesfully completed 3 short-term iOS projects and was a part of 2 large cross-function product teams.
        </p>
      </div>

      <div className="experience-button-wrapper">
        <ActionButton label="More" style="outline" link="/career" />
      </div>
    </div>
  )
}

export default ExperienceBlock
