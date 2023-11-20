import { FC, ReactNode } from "react";

interface ImageProps {
  className?: string;
  src: string | any,
  maxWidth?: string | number,
  maxHeight?: string | number
  fit?: "fill" | "cover" | "scale down" | "none"
  children?: ReactNode;
}

const Image: FC<ImageProps> = ({
  className = "",
  src,
  maxWidth,
  maxHeight,
  fit = "none",
  children,
}) => {
  const imageStyle = {
    maxWidth,
    maxHeight,
    fit: fit
  };

  return (
    <img className={`${className}`} src={src} style={imageStyle}>
      {children}
    </img>
  );
};

export default Image;
