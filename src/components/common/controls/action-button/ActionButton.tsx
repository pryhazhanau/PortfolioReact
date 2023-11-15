import "./ActionButton.css";

import { FC } from "react";

interface ButtonProps {
  label: string;
  className?: string;
  style?: "primary" | "outline" | undefined;
  link?: string;
  linkTarget?: "blank" | "self" | undefined
  onClick?: () => void | undefined;
}

const ActionButton: FC<ButtonProps> = ({
  label,
  style,
  className,
  link,
  linkTarget,
  onClick,
}) => {
  const buttonStyle = style == undefined ? "primary" : style;
  const target = linkTarget === "blank" ? "_blank" : "_self"
  return (
    <div className={className}>
      <button className={`action-button-${buttonStyle} body-text`} onClick={onClick}>
        { link ? (
          <a href={link} target={target}>{label.toUpperCase()}</a>
        ) : label.toUpperCase()}
      </button>
    </div>
  );
};

export default ActionButton;
