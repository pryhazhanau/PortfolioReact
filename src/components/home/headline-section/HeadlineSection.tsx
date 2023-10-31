import "./HeadlineSection.css";
import "../../../common/css/div-layout.css";
import ActionButton from "../../common/controls/action-button/ActionButton";

function HeadlineSection() {
    const emailAddress = "vprigozhanov@gmail.com";
    const mailtoLink = `mailto:${emailAddress}?subject=Hello, Uladzimir`;
    const sendEmail = () => {
        window.location.href = mailtoLink;
    };
  
    return (
      <>
          <div className="headline-container">
            <div className="main-title-block">
              <h1 className="headline-title">
                Hello<span className="colored-dot">.</span>
              </h1>
              <div className="headline-subtitle-block">
                <div className="horizontal-line-subtitle" />
                <h1 className="title-secondary">I’m Uladzimir Pryhazhanau</h1>
              </div>
            </div>
            <div className="position-description-block">
              <h1 className="subtitle-description subtitle-primary">
                Software Engineer
              </h1>
            </div>
            <div>
              <ActionButton label="Stay in touch" onClick={sendEmail} />
            </div>
          </div>
      </>
    );
  }
  
  export default HeadlineSection;
  