import "./GridContent.css"
import FlexBox from "../../../../components/common/box/FlexBox"
import { Colors } from "../../../../components/common/style/interface/Colors"
import { Typography } from "../../../../components/common/style/interface/Typography"
import Text from "../../../../components/common/style/Text"
import ArrowButton from "./arrow-button/ArrowButton"
import UrlOpener from "../../../../components/common/util/UrlOpener"
import Constants from "../../../../common/ConstantsObj"

import cvFile from "../../../../assets/cv.pdf"
import { useEffect, useState } from "react"

const GridContentMobile = () => {
  return (
    <FlexBox className="headline-grid-content-mobile" width={"100%"}>
      <FlexBox width="100%" height={"100%"} direction="column">
        <TitleCell />
        <DescriptionCell />
        <ButtonsCell />
      </FlexBox>
    </FlexBox>
  )
}

const TitleCell = () => {
  const [underscoreVisible, setUndersocreVisible] = useState(true)

  useEffect(() => {
    const toggleUnderscore = () => {
      setUndersocreVisible((prevValue) => !prevValue)
    }
    const intervalId = setInterval(toggleUnderscore, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <FlexBox height="33.3%" width="100%">
      <FlexBox
        direction="column"
        justifyContent="space-between"
        padding={{ top: 24, bottom: 40, leading: 24, trailing: 24 }}
      >
        <p className="headline-subheading-mobile">Hi there,</p>
        <p className="headline-heading-mobile">
          I’m Uladzimir
          {underscoreVisible && <span className="colored-slash">_</span>}
        </p>
      </FlexBox>
    </FlexBox>
  )
}

const DescriptionCell = () => {
  return (
    <FlexBox width={"100%"} height={"33.3%"}>
      <FlexBox
        justifyContent="center"
        alignItems="center"
        padding={{ top: 48, bottom: 48, leading: 48, trailing: 48 }}
      >
        <Text
          text={DescriptionText}
          typography={Typography.BodyText}
          color={Colors.TitaniumGray}
        />
      </FlexBox>
    </FlexBox>
  )
}

const ButtonsCell = () => {
  const sendEmail = () => {
    window.location.href = Constants.contact.email.link
  }

  const openCV = () => {
    window.open(cvFile, "_blank")
  }

  return (
    <FlexBox width={"100%"} height={"33.3%"}>
      <FlexBox
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={"100%"}
      >
        <FlexBox direction="column" alignItems="start">
          <ArrowButton text="Mail me" onClick={sendEmail} />
          <ArrowButton
            text="Message me"
            onClick={() => UrlOpener.openUrl(Constants.contact.telegram.link)}
          />
          <ArrowButton text="See my CV" onClick={openCV} />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

const DescriptionText = `I am a Software Engineer based in Warsaw, focused on iOS Development.
I am a curious and easygoing person with a passion for creating awesome applications.`

export default GridContentMobile
