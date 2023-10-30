import "./Socials.css";

import instImg from "../../assets/socials/instagram.svg";
import linkedInImg from "../../assets/socials/linkedin.svg";
import telegramImg from "../../assets/socials/telegram.svg";
import githubImg from "../../assets/socials/github.svg";
import { ReactSVG } from "react-svg";

function Socials() {
  return (
    <>
      <div className="follow-me-container">
        <div className="body-text follow-me-label">Contact Me</div>
        <div className="follow-me-vertical-line"></div>
        <div className="social-icons">
          <a href="https://www.instagram.com/prigozhanov/" target="_blank" className="social-icon-link">
            <ReactSVG className="social-icon" src={instImg} />
          </a>
          <a href="https://www.linkedin.com/in/prigozhanov/" target="_blank" className="social-icon-link">
          <ReactSVG className="social-icon" src={linkedInImg} />
          </a>
          <a href="https://t.me/prigozhanov" target="_blank" className="social-icon-link">
            <ReactSVG className="social-icon" src={telegramImg} />
          </a>
          <a href="https://github.com/Prigozhanov" target="_blank" className="social-icon-link">
          <ReactSVG className="social-icon" src={githubImg} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Socials;
