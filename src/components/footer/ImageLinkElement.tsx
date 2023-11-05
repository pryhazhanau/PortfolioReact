import { FC, ReactNode } from "react";
import "./ImageLinkElement.css";
import { ReactSVG } from "react-svg";

interface ImageLinkElementProps {
  img?: string;
  text: ReactNode;
  link?: string;
  inNewWindow?: boolean;
  onClick?: () => void
}

const ImageLinkElement: FC<ImageLinkElementProps> = ({ img, text, link, inNewWindow, onClick }) => {
  return (
    <div className="image-link-element">{
        img ?
      <ReactSVG
        src={img}
        className="svg-container"
      /> : null
    }
      <p className="footer-link-body" onClick={() => onClick? onClick() : null}>
        <a href={link ? link : ""} target={inNewWindow ? "_blank" : ""}>{text}</a>
      </p>
    </div>
  );
};

export default ImageLinkElement;
