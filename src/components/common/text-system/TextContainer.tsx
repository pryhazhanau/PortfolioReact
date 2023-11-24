import { FC } from "react";
import StyledText from "./StyledText";

interface TextContainerProps {
  text: string;
  paragraphMargin?: boolean;
}

const TextContainer: FC<TextContainerProps> = (props) => {
  return <p style={{textIndent: `${props.paragraphMargin ? "50px" : "0"}`}}><StyledText text={props.text}/></p>;
};



export default TextContainer;
