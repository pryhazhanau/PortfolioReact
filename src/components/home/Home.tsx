import "./Home.css";
import "../../common/css/div-layout.css";
import HeadlineSection from "./headline-section/HeadlineSection";
import AboutSection from "./about-section/AboutSection";

function Home() {
  return (
    <>
      <div>
        <HeadlineSection/>
        <AboutSection/>
      </div>
    </>
  );
}

export default Home;
