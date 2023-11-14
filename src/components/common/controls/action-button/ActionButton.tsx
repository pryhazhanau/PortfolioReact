import "./ActionButton.css";

import { FC } from "react";

interface ButtonProps {
  label: string;
  className?: string;
  style?: "primary" | "outline" | undefined;
  link?: string
  onClick?: () => void | undefined;
}

const ActionButton: FC<ButtonProps> = ({
  label,
  style,
  className,
  link,
  onClick,
}) => {
  const buttonStyle = style == undefined ? "primary" : style;
  return (
    <div className={className}>
      <button className={`action-button-${buttonStyle} body-text`} onClick={onClick}>
        { link ? (
          <a href={link}>{label.toUpperCase()}</a>
        ) : label.toUpperCase()}
      </button>
    </div>
  );
};

export default ActionButton;
