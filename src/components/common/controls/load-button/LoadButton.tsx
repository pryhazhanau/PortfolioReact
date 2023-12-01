import "./LoadButton.css";
import { FC } from "react";
import { ReactSVG } from "react-svg";
import FlexBox from "../../box/FlexBox";

interface LoadButtonProps {
  label: string;
  className?: string;
  link?: string;
  icon: any;
  linkTarget?: "blank" | "self" | undefined;
  onClick?: () => void | undefined;
}

const LoadButton: FC<LoadButtonProps> = (props) => {
  const target = props.linkTarget === "blank" ? "_blank" : "_self";
  return (
    <div className={props.className}>
      <button className={`load-button body-text`} onClick={props.onClick}>
        <FlexBox alignItems="center">
          <FlexBox padding={{leading: 12, trailing: 12}}>
            {props.label ? (
              <a href={props.link} target={target}>
                <p>{props.label}</p>
              </a>
            ) : (
              <p>{props.label}</p>
            )}
          </FlexBox>
          <FlexBox className="load-button-right-icon-container" width={36} height={36} justifyContent="center" alignItems="center">
               <ReactSVG className="load-button-right-image" src={props.icon} />
          </FlexBox>
        </FlexBox>
      </button>
    </div>
  );
};

export default LoadButton;
