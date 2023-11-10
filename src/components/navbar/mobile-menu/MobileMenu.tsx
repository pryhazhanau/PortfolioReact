import { FC, useState } from "react";
import "./MobileMenu.css";
import { ReactSVG } from "react-svg";
import { AnimatePresence, motion, easeOut, cubicBezier } from "framer-motion";

import Constants from "../../../common/ConstantsObj";
import instImg from "../../../assets/icons/instagram.svg";
import linkedInImg from "../../../assets/icons/linkedin.svg";
import telegramImg from "../../../assets/icons/telegram.svg";
import githubImg from "../../../assets/icons/github.svg";
import emailImg from "../../../assets/icons/mail.svg";

interface MobileMenuProps {
  menuVisibilityChanged: (visible: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ menuVisibilityChanged }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    menuVisibilityChanged(isMenuOpen);
  };

  return (
    <div className="menu-mobile-button-container">
      <div
        id="burger-menu-icon"
        className={isMenuOpen ? "open" : ""}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <AnimatePresence mode="sync">
          {isMenuOpen ? (
            <motion.div
              className="menu-mobile"
              key={"mobileMenuOpen"}
              exit={{ opacity: 0, translateY: -200 }}
              initial={variants.hidden}
              animate={ variants.flip }
              transition={{ duration: 0.3 }}
              variants={variants}
            >
                <div className="menu-mobile-items">
                  <a href="/">
                    <p className="subtitle-primary-aluminor">Home</p>
                  </a>
                  <a href="/career">
                    <p className="subtitle-primary-aluminor">Career</p>
                  </a>
                  <a href="/portfolio">
                    <p className="subtitle-primary-aluminor">Portfolio</p>
                  </a>
                </div>

                <div className="menu-mobile-social-icons-wrapper">
                  <div className="menu-mobile-social-icons">
                    <a
                      href={Constants.contact.instagram.link}
                      target="_blank"
                      className="social-icon-link"
                    >
                      <ReactSVG className="social-icon" src={instImg} />
                    </a>
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
                      <ReactSVG className="social-icon" src={githubImg} />
                    </a>
                    <a
                      href={Constants.contact.email.link}
                      target="_blank"
                      className="social-icon-link"
                    >
                      <ReactSVG className="social-icon" src={emailImg} />
                    </a>
                  </div>
                </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      )}
    </div>
  );
};

const duration = 0.7
const easeEase = [.11,.94,.14,1.01]
const variants = {
  flip: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        ease: easeEase,
        duration: duration
      }
    }
  },
  hidden: {
    opacity: 0,
    y: -200,
    transition: {
      y: {
        ease: easeEase,
        duration: duration
      }
    }
  }
};

export default MobileMenu;
