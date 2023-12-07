import { FC, ReactNode } from "react"
import { EdgeInset } from "../style/interface/EdgeInset"

interface GridBoxProps {
  className?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  gap?: string | number;
  margin?: EdgeInset;
  padding?: EdgeInset;
  children?: ReactNode;
}

const GridBox: FC<GridBoxProps> = ({
  className = "",
  gridTemplateColumns,
  gridTemplateRows,
  gap,
  children,
  width,
  height,
  maxWidth,
  minWidth,
  margin,
  padding
}) => {
  const gridBoxStyle = {
    display: "grid",
    gridTemplateColumns,
    gridTemplateRows,
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
  }

  return (
    <div className={`grid-box ${className}`} style={gridBoxStyle}>
      {children}
    </div>
  )
}

export default GridBox
