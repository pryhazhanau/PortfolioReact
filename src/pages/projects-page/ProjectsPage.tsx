import "./ProjectsPage.css";
import MasterContainer from "../../components/master-container/MasterContainer";
import AppCard from "./app-card/AppCard";
import Footer from "../../components/footer/Footer";
import GradientSectionBackground from "../../components/common/background/GradientSectionBackground";
import Text from "../../components/common/style/Text";
import { Typography } from "../../components/common/style/interface/Typography";
import { Colors } from "../../components/common/style/interface/Colors";
import FlexBox from "../../components/common/box/FlexBox";

import InDriveImg from "../../assets/apps/InDrive.png";
import FleetImg from "../../assets/apps/FleetInstall.png";
import RevealImg from "../../assets/apps/RevealInstall.png";
import FonbetImg from "../../assets/apps/Fonbet.png";
import HedwigImg from "../../assets/apps/Hedwig.png";
import YFCImg from "../../assets/apps/YFC.png";
import { AppProject } from "./support/AppProject";

function ProjectsPage() {
  return (
    <>
      <MasterContainer>
        <FlexBox direction="column" margin={{top: "var(--navbar-height)"}}>
          <FlexBox width="100%" height={200} alignItems="center" justifyContent="center">
          <Text text="Projects and Applications" typography={Typography.Title} color={Colors.AluminorGray}/>
          </FlexBox>
          <div className="applications-wrapper">
            {apps.map((item) => (
              <div key={item.id}>
                <AppCard app={item} />
              </div>
            ))}
          </div>
        </FlexBox>
      </MasterContainer>
      <GradientSectionBackground/>
      <Footer />
    </>
  );
}

const apps: AppProject[] = [
  {
    id: 0,
    img: InDriveImg,
    title: "InDrive",
    body: "inDrive, formerly known as inDriver, is a revolutionary ride-share application that boasts a presence in over 600 cities across 48 countries.",
    link: "https://apps.apple.com/us/app/indrive-save-on-city-rides/id780125801",
  },
  {
    id: 1,
    img: FonbetImg,
    title: "Fonbet",
    body: "Platform for sports betting and online gaming. Real-time scores, secure payments, bettings etc.",
    link: "https://apps.apple.com/cy/app/fonbet-sports-betting/id1353344750",
  },
  {
    id: 2,
    img: YFCImg,
    title: "Your Fitness Coach",
    body: "A free fitness tracker that rewards you with in-app currency for simply being active.",
    link: "https://apps.apple.com/us/app/your-fitness-coach/id1631809438",
  },
  {
    id: 4,
    img: FleetImg,
    title: "Fleet Install",
    body: "The Fleet Hardware Installer app guides third-party technicians through the installation process of vehicle tracking devices.",
    link: "https://apps.apple.com/us/app/fleet-hardware-installer/id1154838582",
  },
  {
    id: 5,
    img: RevealImg,
    title: "Reveal Install",
    body: "The Reveal Hardware Installer app guides third-party technicians through the installation process of our vehicle, dash camera and asset-tracking devices.",
    link: "https://apps.apple.com/us/app/reveal-hardware-installer/id1497902836",
  },
  {
    id: 6,
    img: HedwigImg,
    title: "Hedwig Messenger",
    body: "Protect enterprise messenger with encrypted messages, calls, data-tranfer.",
    link: undefined,
  },
];

export default ProjectsPage;
