import { Fragment, FC } from "react"
import { Typography } from "../style/interface/Typography"
import { Colors } from "../style/interface/Colors"
import "./StyledText.css"

interface StyledTextProps {
  text: string;
}

const TextProcessor: React.FC<StyledTextProps> = ({ text }) => {
  const regex = /\(([^)]+)\)\[([^)]+)\]|\*([^*]+)\*|#([^#]+)#/g

  let lastIndex = 0
  let match
  const processedText: JSX.Element[] = []

  const pushText = (substring: string) => {
    if (substring) {
      processedText.push(
        <Fragment key={lastIndex}>{getRegularStyleSpan(substring)}</Fragment>
      )
    }
  }

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, linkText, url, boldText, italicText] = match

    pushText(text.substring(lastIndex, match.index))

    if (linkText && url) {
      processedText.push(getLinkStyleSpan(linkText, url))
    } else if (boldText) {
      processedText.push(getRegularBoldSpan(boldText))
    } else if (italicText) {
      processedText.push(
        <span
          key={lastIndex}
          className="quote"
          style={{ color: Colors.TitaniumGray.var }}
        >
          {italicText}
        </span>
      )
    }

    lastIndex = match.index + fullMatch.length
  }

  pushText(text.substring(lastIndex))

  return <div>{processedText}</div>
}

const StyledText: FC<StyledTextProps> = ({ text }) => {
  return (
    <div>
      <TextProcessor text={text} />
    </div>
  )
}

function getRegularStyleSpan(text: string) {
  const typo = Typography.ArticleBody
  return (
    <span
      style={{
        fontFamily: typo.fontFamily,
        fontSize: typo.fontSize,
        fontWeight: typo.fontWeight,
        color: Colors.TitaniumGray.var,
      }}
    >
      {text}
    </span>
  )
}

function getRegularBoldSpan(text: string) {
  const typo = Typography.ArticleBodyBold
  return (
    <span
      style={{
        fontFamily: typo.fontFamily,
        fontSize: typo.fontSize,
        fontWeight: typo.fontWeight,
        color: Colors.AluminorGray.var,
      }}
    >
      {text}
    </span>
  )
}

function getLinkStyleSpan(text: string, url: string) {
  const typo = Typography.ArticleBodyBold
  return (
    <span
      className="article-link"
      style={{
        fontFamily: typo.fontFamily,
        fontSize: typo.fontSize,
        fontWeight: typo.fontWeight,
      }}
    >
      <a href={url} target="_blank" style={{ color: Colors.Voyaro.var, textDecoration: "none" }}>
        {text}
      </a>
    </span>
  )
}

export default StyledText
