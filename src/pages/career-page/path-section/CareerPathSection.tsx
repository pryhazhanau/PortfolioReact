import "./CareerPathSection.css";
import YearContainer from "./YearContainer";

import AndersenImg from "../../../assets/companies/andersen.png";
import EffectiveImg from "../../../assets/companies/effective-soft.png";
import ConstImg from "../../../assets/companies/constanta.png";
import EpamImg from "../../../assets/companies/epam.png";
import TimeLineProgressSVG from "./TimeLineProgress";

function CareerPathSection() {
  return (
    <>
      <div className="career-path-section">
        <div className="career-path-grid">
          <div className="career-left-col">
            <YearContainer
              year={Companies.andersen.year}
              title={Companies.andersen.name}
              text={Companies.andersen.bodyText}
              img={Companies.andersen.img}
            />
            <YearContainer
              year={Companies.constanta.year}
              title={Companies.constanta.name}
              text={Companies.constanta.bodyText}
              img={Companies.constanta.img}
              topOffset="40vh"
            />
          </div>
          <div className="timeline-progress-container">
            <div className="timeline-progress">
              <TimeLineProgressSVG />
            </div>
          </div>
          <div className="career-right-col">
            <YearContainer
              year={Companies.effectivesoft.year}
              title={Companies.effectivesoft.name}
              text={Companies.effectivesoft.bodyText}
              img={Companies.effectivesoft.img}
              topOffset="40vh"
              rightToLeft={true}
            />
            <YearContainer
              year={Companies.epam.year}
              title={Companies.epam.name}
              text={Companies.epam.bodyText}
              img={Companies.epam.img}
              topOffset="40vh"
              rightToLeft={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const Companies = {
  andersen: {
    name: "Andersen Lab",
    bodyText:
      "As a well-established European software development company, Andersen has earned the trust of its many customers operating all over the EU. Our team will analyze and fully understand your needs to start delivering the best possible industry-focused IT solutions. Andersen`s history, customer referrals, and experienced employees are our guarantee of success.",
    img: AndersenImg,
    year: "2022",
  },
  effectivesoft: {
    name: "EffectiveSoft",
    bodyText:
      "EffectiveSoft is a software development company headquartered in San Diego, USA, with its development center based in Wroclaw, Poland.Since our company’s foundation in 2000, we have successfully completed more than 1500 projects for small, medium-sized, and large enterprises. We are honored to be recognized as a trusted partner in the global IT community.",
    img: EffectiveImg,
    year: "2022",
  },
  constanta: {
    name: "Constanta",
    bodyText:
      "The company engaged in product development for the bookmaker and sports industry. Their focus areas include creating software for high-load distributed systems, developing services and client applications, as well as building and maintaining IT infrastructure.",
    img: ConstImg,
    year: "2020",
  },
  epam: {
    name: "EPAM Systems",
    bodyText:
      "The company engaged in product development for the bookmaker and sports industry. Their focus areas include creating software for high-load distributed systems, developing services and client applications, as well as building and maintaining IT infrastructure.",
    img: EpamImg,
    year: "2017",
  },
};

export default CareerPathSection;