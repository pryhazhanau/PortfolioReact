import "./Navbar.css";
import "../../common/css/gradient.css";
import cvFile from "../../assets/cv.pdf";
import { FC, useState, useEffect } from "react";
import ActionButton from "../common/controls/action-button/ActionButton";
import MenuButton from "./mobile-menu/MobileMenu";

interface NavbarProps {
  menuVisibilityChanged: (visible: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ menuVisibilityChanged }) => {
  const [isOnTop, setOnTop] = useState(true);
  const [navbarBlur, setNavbarBlur] = useState(10);
  const [navbarBrightness, setNavbarBrightness] = useState(80);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }

    if (window.scrollY >= 0) {
      const blurValue = window.scrollY < 0 ? 0 : window.scrollY / 10 + 12;
      setNavbarBlur(blurValue);

      const brightnessValue = (1 - window.scrollY / 200) * 100 - 20;
      setNavbarBrightness(brightnessValue > 0 ? brightnessValue : 0);
    } else {
      setNavbarBlur(12);
    }
  };

  const onClick = () => {
    window.open(cvFile, "_blank");
  };

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

  window.addEventListener("scroll", handleScroll);

  return (
    <nav>
      <div>
        {windowWidth > 900 ? (
          <div
            className={`${
              isOnTop ? "navbar-desktop" : "navbar-desktop shadow"
            }`}
            style={{
              WebkitBackdropFilter: `blur(${navbarBlur}px) brightness(${navbarBrightness}%)`,
              backdropFilter: `blur(${navbarBlur}px) brightness(${navbarBrightness}%)`
            }}
          >
            <div>
              <a className="logo" href="/">
                PRY.
              </a>
            </div>
            <div className="menu">
              <div className="menu-item-container">
                <a className="menu-item gradient-hover body-text" href="/">
                  Home
                </a>
              </div>
              <div className="menu-item-container">
                <a
                  className="menu-item gradient-hover body-text"
                  href="/career"
                >
                  Career
                </a>
              </div>
              <div className="menu-item-container">
                <a
                  className="menu-item gradient-hover body-text"
                  href="/projects"
                >
                  Projects
                </a>
              </div>
              <ActionButton
                className="cv-button"
                label="CV"
                onClick={onClick}
              />
            </div>
          </div>
        ) : (
          <div
            className={`${isOnTop ? "navbar-mobile" : "navbar-mobile shadow"}`}
            style={{ backgroundColor: "var(--background--primary)" }}
          >
            <a className="logo" href="/">
              PRY.
            </a>
            <MenuButton
              menuVisibilityChanged={(visible) =>
                menuVisibilityChanged(visible)
              }
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
