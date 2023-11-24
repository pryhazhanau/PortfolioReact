import { FC, ReactNode } from "react";

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
  gap?: string | number;
  margin?: EdgeInset;
  padding?: EdgeInset;
  children?: ReactNode;
}

const FlexBox: FC<FlexBoxProps> = ({
  className = "",
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap,
  children,
  width,
  height,
  maxWidth,
  minWidth,
  margin,
  padding
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
    gap,
    marginTop: margin?.top,
    marginBottom: margin?.bottom,
    marginLeft: margin?.leading,
    marginRight: margin?.trailing,
    paddingTop: padding?.top,
    paddingBottom: padding?.bottom,
    paddingLeft: padding?.leading,
    paddingRight: padding?.trailing,
  };

  return (
    <div className={`flex-box ${className}`} style={flexBoxStyle}>
      {children}
    </div>
  );
};

export default FlexBox;
