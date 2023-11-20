import "./AboutSection.css";
import "../HomePage.css";
import "../../../common/css/div-layout.css";
import FlexBox from "../../../components/common/box/FlexBox";
import Text from "../../../components/common/style/Text"
import Photo from "../../../assets/about-photo.png";
import SectionTitle from "../../../components/common/section-title/SectionTitle";
import Image from "../../../components/common/style/Image";
import { Typography } from "../../../components/common/style/interface/Typography";
import { Colors } from "../../../components/common/style/interface/Colors";

function AboutSection() {
  return (
    <>
      <FlexBox className="about-container page-section">
        <FlexBox className="about-content-container">
          <FlexBox className="about-flex-container" gap={50} justifyContent="center" alignItems="center">
            <FlexBox direction="column">
              <SectionTitle
                sectionName="About me"
                sectionDesc="Who am I and what I am doing"
              />
              <Text text={AboutText} typography={Typography.BodyText} color={Colors.SpaceroGray}/>
            </FlexBox>
            <Image src={Photo} maxWidth="40%"/>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}

const AboutText = `My name is Uladzimir, and I am an iOS Developer from Warsaw,
Poland. I was born in Minsk, Belarus. I've found my professional
calling in the world of iOS and MacOS Development. With a solid
and comprehensive foundation in this field, I've spent almost
five years refining my iOS development skills through a
combination of professional experiences and personal projects. I
possess an in-depth understanding of Swift and Objective-C,
along with a profound familiarity with the iOS SDK. Beyond my
technical prowess, I take pride in being a dedicated and
detail-oriented professional who thrives in collaborative,
fast-paced environments. My true passion lies in crafting
elegant, user-centric solutions, and I'm committed to delivering
products that not only meet but exceed customer expectations.`

export default AboutSection;
