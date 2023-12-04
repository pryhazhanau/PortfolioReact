import "./CareerPage.css";
import "../../common/css/div-layout.css";
import MasterContainer from "../../components/master-container/MasterContainer";
import Footer from "../../components/footer/Footer";
import CareerTitle from "./career-title/CareerTitle";
import CompanyCard from "./company-card/CompanyCard";
import FlexBox from "../../components/common/box/FlexBox";
import TextContainer from "../../components/common/text-system/TextContainer";

import AndersenImg from "../../assets/companies/andersen.png";
import ConstantaImg from "../../assets/companies/constanta.png";
import EpamImg from "../../assets/companies/epam.png";

const textMaxWidht = 600

function CareerPage() {
  return (
    <>
      <MasterContainer>
          <AndersenSection />
          <ConstantaSection />
          <EpamSection />
        <FlexBox height={250} />
      </MasterContainer>
      <Footer />
    </>
  );
}

const AndersenSection = () => {
  const companyName = "AndersenLab";
  return (
    <FlexBox direction="column" gap={48} alignItems="center">
      <FlexBox direction="column" maxWidth={textMaxWidht}>
        <CareerTitle
          fromDate="Sep. 2022"
          toDate="Nov. 2023"
          companyName={companyName}
          location="Warsaw, Poland"
        />
        <TextContainer text="I have started working at *AndersenLab* in September '22. I started working as an outstaff engineer at (InDrive)[https://indrive.com], an amazing product with a highly proficient and well-organized team. The teams were structured by core and feature functionality, each consisting of 10 to 15 specialists with a team lead at the helm. In the mobile department alone, there were over *60 iOS Developers*." />
        <TextContainer text="I was part of a feature team responsible for the driver client. During my time there, I gained valuable experience, particularly in architectural approaches, git-flow, and code-review processes. Additionally, we had an extremely proficient agile coach who significantly contributed to improving team’s development process, making it more efficient and straightforward." />
        <TextContainer text="Despite the relative youth of our team at that moment, we achieved a high level of communication and teamwork. We embraced the philosophy of learning from our mistakes and regularly discussed them at least every week. I am very grateful to have had the opportunity to work with such an experienced and collaborative team." />
      </FlexBox>
      <CompanyCard
        companyName={companyName}
        companyImage={AndersenImg}
        companyLink="https://andersenlab.com"
        companyDesc="A well-established European software development company. It's headquaters based in Warsaw, Poland."
        role="iOS Developer"
        team="60+"
        office="Warsaw/Remote"
      />
    </FlexBox>
  );
};
const ConstantaSection = () => {
  const companyName = "Constanta";
  return (
    <FlexBox direction="column" gap={48} alignItems="center">
      <FlexBox direction="column" maxWidth={textMaxWidht}>
        <CareerTitle
          fromDate="May 2020"
          toDate="Sep. 2022"
          companyName={companyName}
          location="Moscow, Russia"
        />
        <TextContainer text="*Constanta* was established as a start-up focusing on sport tech and computer vision. My journey at Constanta began in May '19 as an iOS/MacOS Developer. I was involved in two projects during my time there. The first project was a (Hedwig Messenger)[/projects], an application for secure messaging with end-to-end encryption. Initially distributed exclusively as an enterprise application for iOS/MacOS and Android, it was developed using the Objective-C programming language." />
        <TextContainer text="Over time, we faced challenges with the project's structure and outdated core components, leading to a decision to rewrite most modules in Swift. The core functionality relied on the WebRTC native framework, enabling the implementation of end-to-end video calls with posibitly to create group calls. Unfortunately, the development of Hedwig was halted due to financial constraints. Despite this, my experience on a product development was incredibly insightful, providing me with valuable knowledge in Sockets and WebRTC technology." />
      </FlexBox>
      <CompanyCard
        companyName={companyName}
        companyImage={ConstantaImg}
        companyLink="https://const.tech"
        companyDesc="Constanta engaged in product development for the bookmaker and sports industry. Their focus areas include creating software for high-load distributed systems, developing services and client applications"
        role="iOS Developer"
        team="15"
        office="Moscow/Remote"
      />
    </FlexBox>
  );
};

const EpamSection = () => {
  const companyName = "EPAM Systems";
  return (
    <FlexBox direction="column" gap={48} alignItems="center">
      <FlexBox direction="column" maxWidth={textMaxWidht}>
        <CareerTitle
          fromDate="Aug. 2017"
          toDate="May 2020"
          companyName={companyName}
          location="Minsk, Belarus"
        />
        <TextContainer text="*EPAM Systems* is a well-established and globally recognized outsourcing development company. I began my IT career at this company as a Junior Automation Engineer, specializing in Java and Javascript. My initial project was the extensive entertainment initiative named (Paramount Global)[https://www.paramount.com]. In this role, my responsibilities involved creating automation tests to cover functionalities for subprojects like Paramount, Nickelodeon, MTV, ComedyCentral, and others. Focusing on mobile automation tests, I closely collaborated with mobile development, particularly on the iOS platform. My growing interest in iOS Development led me to learn Swift and Objective-C, eventually prompting a transition to the role of an iOS Developer after 2.5 years of contributing to Paramount." />
        <TextContainer text="In my new role as an iOS Developer, my first project involved the (Verizon)[https://www.verizon.com] application Fleet Install, which was later split into two applications: (Fleet Install)[https://apps.apple.com/us/app/fleet-hardware-installer/id1154838582] and (Reveal Install)[https://apps.apple.com/us/app/reveal-hardware-installer/id1497902836]. These were enterprise applications providing guidelines for third-party technicians during the installation process of vehicle tracking devices. While the second part of the application was similar, it presented variations in tracking devices. This marked my initial foray into iOS development, and I discovered the vast world of iOS development, gaining valuable insights into enterprise development, architectural approaches, and the technology stack." />
      </FlexBox>
      <CompanyCard
        companyName={companyName}
        companyImage={EpamImg}
        companyLink="https://www.epam.com"
        companyDesc="Constanta engaged in product development for the bookmaker and sports industry. Their focus areas include creating software for high-load distributed systems, developing services and client applications"
        role="iOS Developer"
        team="15 Specialists"
        office="Minsk"
      />
    </FlexBox>
  );
};



// const EffectiveSoftSection = () => {
//   const companyName = "EffectiveSoft";
//   return (
//     <FlexBox direction="column" gap={48} alignItems="center">
//       <FlexBox direction="column" maxWidth={textMaxWidht}>
//         <CareerTitle
//           fromDate="May 2022"
//           toDate="Sep. 2022"
//           companyName={companyName}
//           location="Minsk, Belarus"
//         />
//         <TextContainer text="I have started working at *EffectiveSoft* in May '22, where I was responsible for development of the (YourFitnessCoach)[https://yourfitness.coach] iOS app with a team of 2 iOS developers and 3 back-end developers. The main goal was to make the MVP version of the app, and we did it successfully." />
//         <TextContainer text="My job at the company involved not just building the app but also guiding and giving feedback to my teammates. I enjoyed being part of a collaborative effort where we learned from each other. After we finished the project, I have relocated from Minsk, Belarus, to Warsaw, Poland, for a new step in my life and career." />
//         <TextContainer text="This changes allowed me to learn more and bring my skills to a different place. It was a bit challenging adapting to a new environment, but it turned out to be an exciting experience. Exploring a different city and working with new people brought fresh perspectives and opportunities for growth." />
//       </FlexBox>
//       <CompanyCard
//         companyName={companyName}
//         companyImage={EffectiveSoftImg}
//         companyLink="https://www.effectivesoft.com"
//         companyDesc="EffectiveSoft is a software development company headquartered in San Diego, USA, with its development center based in Wroclaw, Poland."
//         role="iOS Developer"
//         team="10"
//         office="Minsk/Remote"
//       />
//     </FlexBox>
//   );
// };


export default CareerPage;
