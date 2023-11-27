import { FC, ReactNode, MouseEvent } from "react";

interface FlexBoxProps {
  className?: string;
  direction?: "row" | "column";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "stretch" | "start" | "end" | "center" | "baseline";
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  gap?: string | number;
  margin?: EdgeInset;
  padding?: EdgeInset;
  transform?: string
  backgroundColor?: string;
  children?: ReactNode;
  onMouseEnter?: (element: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (element: MouseEvent<HTMLDivElement>) => void;
  onClick?: (element: MouseEvent<HTMLDivElement>) => void;
  onMouseMove?: (element: MouseEvent<HTMLDivElement>) => void;
}

const FlexBox: FC<FlexBoxProps> = ({
  className = "",
  direction,
  justifyContent,
  alignItems,
  gap,
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  margin,
  padding,
  transform,
  backgroundColor,
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onMouseMove,
}) => {
  const flexBoxStyle = {
    display: "flex",
    flexDirection: direction,
    justifyContent,
    alignItems,
    width,
    height,
    maxWidth,
    minWidth,
    maxHeight,
  minHeight,
    gap,
    marginTop: margin?.top,
    marginBottom: margin?.bottom,
    marginLeft: margin?.leading,
    marginRight: margin?.trailing,
    paddingTop: padding?.top,
    paddingBottom: padding?.bottom,
    paddingLeft: padding?.leading,
    paddingRight: padding?.trailing,
    transform,
    backgroundColor,
  };

  return (
    <div
      className={`flex-box${className ? ` ${className}` : ""}`}
      style={flexBoxStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
};

export default FlexBox;
