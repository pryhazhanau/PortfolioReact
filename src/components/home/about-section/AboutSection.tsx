import "./AboutSection.css";
import "../Home.css";
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
              My name is Uladzimir, I am an iOS Developer from Warsaw, Poland. I
              was born and lived in Minsk, Belarus. I have a strong and pure
              base in iOS and MacOS Development. Over the past 4 years, I have
              honed my iOS development skills through both professional
              experience and personal projects. I have a deep understanding of
              Swift and Objective-C, as well as the iOS SDK. In addition to my
              technical skills, I am a dedicated and detail-oriented
              professional who thrives in a collaborative and fast-paced
              environment. I am passionate about creating elegant, user-centric
              solutions and am committed to delivering products that exceed
              customer expectations.
            </h1>
            <img src={Photo}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
