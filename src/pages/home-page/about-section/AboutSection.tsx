import "./AboutSection.css";
import "../HomePage.css";
import "../../../common/css/div-layout.css";
import Photo from "../../../assets/about-photo.png";

function AboutSection() {
  return (
    <>
      <div className="about-container">
        <h1 className="headline section-title">About me</h1>
        <div className="about-content-container">
          <div className="about-flex-container">
            <h1 className="body-text-spacero">
              My name is Uladzimir, and I am an iOS Developer from
              Warsaw, Poland. I was born in Minsk, Belarus. I've found
              my professional calling in the world of iOS and MacOS Development.
              With a solid and comprehensive foundation in this field, I've
              spent almost five years refining my iOS development skills
              through a combination of professional experiences and personal
              projects. I possess an in-depth understanding of Swift and
              Objective-C, along with a profound familiarity with the iOS SDK.
              Beyond my technical prowess, I take pride in being a dedicated and
              detail-oriented professional who thrives in collaborative,
              fast-paced environments. My true passion lies in crafting elegant,
              user-centric solutions, and I'm committed to delivering products
              that not only meet but exceed customer expectations.
            </h1>
            <img src={Photo}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
