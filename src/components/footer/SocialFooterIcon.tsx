import { FC } from "react";
import "./SocialsFooterIcon.css";
import { ReactSVG } from "react-svg";

interface SocialFooterIconProps {
  img: string;
  link: string;
}

const SocialFooterIcon: FC<SocialFooterIconProps> = ({ img, link }) => {
  const openUrl = (url: string) => {
    window.open(url, "_blank")
  }
 
  return (
      <div className="footer-social-icon" onClick={() => {openUrl(link)}}>
        {img ? <ReactSVG src={img} className="svg-container" /> : null}
      </div>
  );
};

export default SocialFooterIcon;
