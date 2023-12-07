import { FC } from "react"
import { Color } from "./interface/Colors"
import { TypographyStyle } from "./interface/Typography"
import { EdgeInset } from "./interface/EdgeInset"

interface TextProps {
  className?: string;
  text?: string;
  typography: TypographyStyle;
  color: Color;
  margin?: EdgeInset;
  padding?: EdgeInset;
  width?: number | string;
  maxWidth?: number | string;
  textAlign?: "left" | "center" | "right" | "justify";
}

const Text: FC<TextProps> = ({ className = "", text = "", typography, color, margin, padding,width, maxWidth, textAlign = "left" }) => {
  const textStyle = {
    color: color.var,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    fontStyle: typography.fontStyle,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    marginTop: margin?.top,
    marginBottom: margin?.bottom,
    marginLeft: margin?.leading,
    marginRight: margin?.trailing,
    padding: `${padding?.top} ${padding?.trailing} ${padding?.bottom} ${padding?.leading}`,
    textAlign,
    width,
    maxWidth
  }

  return (
    <p className={className} style={textStyle}>
      {text}
    </p>
  )
}

export default Text
