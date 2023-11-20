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
  maxWidth?: string | number
  gap?: string | number;
  children: ReactNode;
  margin?: EdgeInset;
  padding?: EdgeInset
}

const FlexBox: FC<FlexBoxProps> = ({
  className = "",
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap,
  children,
  width,
  maxWidth,
  margin,
  padding
}) => {
  const flexBoxStyle = {
    display: "flex",
    flexDirection: direction,
    justifyContent,
    alignItems,
    width,
    maxWidth,
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
