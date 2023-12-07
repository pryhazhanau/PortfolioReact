import "./Socials.css";

import MailImg from "../../assets/icons/mail.svg";
import linkedInImg from "../../assets/icons/linkedin.svg";
import telegramImg from "../../assets/icons/telegram.svg";
import instagramImg from "../../assets/icons/instagram.svg";
import XSVG from "../../assets/icons/twitter.svg";
import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";
import Constants from "../../common/ConstantsObj";

function Socials() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth > 900 && (
        <div className="follow-me-container">
          <div className="body-text follow-me-label">Contact Me</div>
          <div className="follow-me-vertical-line"></div>
          <div className="social-icons">
            <a
              href={Constants.contact.linkedIn.link}
              target="_blank"
              className="social-icon-link"
            >
              <ReactSVG className="social-icon" src={linkedInImg} />
            </a>
            <a
              href={Constants.contact.telegram.link}
              target="_blank"
              className="social-icon-link"
            >
              <ReactSVG className="social-icon" src={telegramImg} />
            </a>
            <a
              href={Constants.contact.github.link}
              target="_blank"
              className="social-icon-link"
            >
              <ReactSVG className="social-icon" src={instagramImg} />
            </a>
            <a
              href={Constants.contact.email.link}
              target="_blank"
              className="social-icon-link"
            >
              <ReactSVG className="social-icon" src={MailImg} />
            </a>{" "}
            <a
              href={Constants.contact.twitter.link}
              target="_blank"
              className="social-icon-link"
            >
              <ReactSVG className="social-icon" src={XSVG} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Socials;
