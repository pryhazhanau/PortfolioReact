import { FC, useState } from "react";
import "./MobileMenu.css";
import { ReactSVG } from "react-svg";
import { AnimatePresence, motion } from "framer-motion";
import AnimationConstants from "../../common/animation/AnimationConstants"

import Constants from "../../../common/ConstantsObj";
import instImg from "../../../assets/icons/instagram.svg";
import linkedInImg from "../../../assets/icons/linkedin.svg";
import telegramImg from "../../../assets/icons/telegram.svg";
import githubImg from "../../../assets/icons/github.svg";
import emailImg from "../../../assets/icons/mail.svg";
import MobileMenuItem from "./MobileMenuItem";

interface MobileMenuProps {
  menuVisibilityChanged: (visible: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ menuVisibilityChanged }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    menuVisibilityChanged(isMenuOpen);
  };

  const currentPath = location.pathname;

  return (
    <div className="menu-mobile-button-container">
      <div
        id="burger-menu-icon"
        className={isMenuOpen ? "open" : ""}
        onClick={toggleMenu}
      >
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
              animate={ variants.visible }
              variants={variants}
            >
                <div className="menu-mobile-items">
                  <MobileMenuItem link="/" text="Home" delayAnimation={0.1} isSelected={currentPath === '/'}/>
                  <MobileMenuItem link="/career" text="Career" delayAnimation={0.2} isSelected={currentPath === '/career'}/>
                  <MobileMenuItem link="/projects" text="Projects" delayAnimation={0.3} isSelected={currentPath === '/projects'}/>
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

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        ease: AnimationConstants.cubic.easeEase,
        duration: AnimationConstants.duration.standard
      }
    }
  },
  hidden: {
    opacity: 0,
    y: -200,
    transition: {
      y: {
        ease: AnimationConstants.cubic.easeEase,
        duration: AnimationConstants.duration.standard
      }
    }
  }
};

export default MobileMenu;
