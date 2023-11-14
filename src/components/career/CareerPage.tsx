import "./CareerPage.css";
import "../../common/css/div-layout.css";
import MasterContainer from "../master-container/MasterContainer";
import Footer from "../footer/Footer";
import CareerPathSection from "./path-section/CareerPathSection"

function CareerPage() {
  return (
    <>
    <MasterContainer>
        <p className="headline-aluminor page-title">Career</p>
        <CareerPathSection/>
    </MasterContainer>
    <Footer/>
      </>
  );
}

export default CareerPage;
