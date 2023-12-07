import "./AboutSection.css"
import "../HomePage.css"
import "../../../common/css/div-layout.css"
import FlexBox from "../../../components/common/box/FlexBox"
import Text from "../../../components/common/style/Text"
import Photo from "../../../assets/about-photo.png"
import SectionTitle from "../../../components/common/section-title/SectionTitle"
import Image from "../../../components/common/style/Image"
import { Typography } from "../../../components/common/style/interface/Typography"
import { Colors } from "../../../components/common/style/interface/Colors"
import { InViewSlide } from "../../../components/common/animation/in-view/InViewSlide"
import LoadButton from "../../../components/common/controls/load-button/LoadButton"
import ArrowDown from "../../../assets/icons/arrow-down.svg"
import CV from "../../../assets/cv.pdf"

function AboutSection() {
  const openCV = () => {
    window.open(CV, "_blank")
  }

  return (
    <>
      <FlexBox className="about-container page-section">
        <FlexBox className="about-content-container">
          <FlexBox
            className="about-flex-container"
            gap={50}
            justifyContent="center"
            alignItems="center"
          >
            <FlexBox direction="column">
              <SectionTitle
                sectionName="About"
                sectionDesc="Who am I and what I am doing"
              />
              <InViewSlide direction="right">
                <Text
                  text={AboutText}
                  typography={Typography.BodyText}
                  color={Colors.TitaniumGray}
                />
              </InViewSlide>
              <FlexBox margin={{ top: 50 }}>
                <LoadButton
                  label="Download CV"
                  icon={ArrowDown}
                  onClick={openCV}
                />
              </FlexBox>
            </FlexBox>
            <FlexBox className="about-section-divider" />
            <InViewSlide
              direction="left"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Image src={Photo} maxWidth="400px" />
            </InViewSlide>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  )
}

const AboutText = `My name is Uladzimir, I am an iOS Developer currently based in  Warsaw, Poland. 
I was born and lived in a hospitable and cozy city of Minsk, Belarus. Over the past 6 years,
I have honed my engineering skills through both professional experience and personal projects. I have a strong and pure base in iOS and MacOS Development. 
I have a deep understanding of Swift and Objective-C programming languages, as well as the iOS SDK.
In addition to my technical skills, I am a dedicated and detail-oriented developer who thrives in a collaborative and fast-paced environment.
I am passionate about creating elegant, user-centric solutions and am committed to delivering products that exceed customer expectations.`

export default AboutSection
