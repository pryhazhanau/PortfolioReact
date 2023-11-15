import "./HeadlineSection.css";
import "../../../common/css/div-layout.css";
import ActionButton from "../../../components/common/controls/action-button/ActionButton";
import AnimatedLongFade from "../../../components/common/animation/AnimatedTextLongFade";

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
                <AnimatedLongFade animKey={"hello-title"}>
              <h1 className="headline-title">
                Hello<span className="colored-dot">.</span>
              </h1>
                </AnimatedLongFade>
                <AnimatedLongFade animKey={"headline-subtitle"} delay={0.3}>
              <div className="headline-subtitle-block">
                <div className="horizontal-line-subtitle" />

                <h1 className="headline-subtitle">I'm Uladzimir Pryhazhanau</h1>
              </div>
                </AnimatedLongFade>
            </div>
            <div className="position-description-block">

            <AnimatedLongFade animKey={"hello-title"} delay={0.6}>
              <h1 className="subtitle-description subtitle-primary">
                Software Engineer
              </h1>
              </AnimatedLongFade>
            </div>
            <div className="action-button-wrapper">

            <AnimatedLongFade animKey={"hello-title"} delay={0.9}>
              <ActionButton label="Stay in touch" onClick={sendEmail} />
              </AnimatedLongFade>
            </div>
          </div>
      </>
    );
  }
  
  export default HeadlineSection;
  