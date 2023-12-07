import { FC } from "react";
import StyledText from "./StyledText";

interface TextContainerProps {
  text: string;
}

const TextContainer: FC<TextContainerProps> = (props) => {
  return <p><StyledText text={props.text}/></p>;
};



export default TextContainer;
