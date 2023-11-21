import "./ActionButton.css";
import { FC } from "react";
import { ReactSVG } from "react-svg";

import ArrowLink from "../../../../assets/icons/arrow-top-right.svg";

interface ButtonProps {
  label: string;
  className?: string;
  style?: "primary" | "outline" | undefined;
  rightIcon?: "arrow-link" | any;
  link?: string;
  linkTarget?: "blank" | "self" | undefined;
  onClick?: () => void | undefined;
}

const ActionButton: FC<ButtonProps> = ({
  label,
  style,
  className,
  rightIcon,
  link,
  linkTarget,
  onClick,
}) => {
  const buttonStyle = style == undefined ? "primary" : style;
  const target = linkTarget === "blank" ? "_blank" : "_self";
  return (
    <div className={className}>
      <button
        className={`action-button-${buttonStyle} body-text`}
        onClick={onClick}
      >
        {link ? (
          <a href={link} target={target}>
            {label.toUpperCase()}
          </a>
        ) : (
          label.toUpperCase()
        )}
        {rightIcon && (
          <ReactSVG className="action-button-right-image" src={getIconByName(rightIcon)} />
        )}
      </button>
    </div>
  );
};

function getIconByName(image: string | any) {
  switch (image) {
    case "arrow-link":
      return ArrowLink
    default:
      return image
  }
}

export default ActionButton;
