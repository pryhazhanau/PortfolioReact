import "./CareerPage.css";
import "../../common/css/div-layout.css";
import MainContainer from "../maincontainer/MasterContainer";
import Footer from "../footer/Footer";
import CareerPathSection from "./path-section/CareerPathSection"

function CareerPage() {
  return (
    <>
    <MainContainer>
        <CareerPathSection/>
    </MainContainer>
    <Footer/>
      </>
  );
}

export default CareerPage;
