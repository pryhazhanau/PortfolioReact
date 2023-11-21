import { FC } from "react";
import { Color } from "./interface/Colors";
import { TypographyStyle } from "./interface/Typography";

interface TextProps {
  className?: string;
  text?: string;
  typography: TypographyStyle;
  color: Color;
  margin?: EdgeInset;
  padding?: EdgeInset;
  maxWidth?: number | string
}

const Text: FC<TextProps> = ({ className = "", text = "", typography, color, margin, padding, maxWidth }) => {
  const textStyle = {
    color: color.var,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    marginTop: margin?.top,
    marginBottom: margin?.bottom,
    marginLeft: margin?.leading,
    marginRight: margin?.trailing,
    padding: `${padding?.top} ${padding?.trailing} ${padding?.bottom} ${padding?.leading}`,
    maxWidth
  };

  return (
    <p className={className} style={textStyle}>
      {text}
    </p>
  );
};

export default Text;
