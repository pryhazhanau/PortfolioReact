import "./CareerPage.css";
import "../../common/css/div-layout.css";
import MasterContainer from "../../components/master-container/MasterContainer";
import Footer from "../../components/footer/Footer";
import CareerPathSection from "./path-section/CareerPathSection"
import GradientSectionBackground from "../../components/common/background/GradientSectionBackground"

function CareerPage() {
  return (
    <>
    <MasterContainer>
        <p className="headline-aluminor page-title">Career</p>
        <CareerPathSection/>
    </MasterContainer>
    <GradientSectionBackground/>
    <Footer/>
      </>
  );
}

export default CareerPage;
