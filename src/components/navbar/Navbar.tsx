import "./Navbar.css";
import "../../common/css/gradient.css";
import cvFile from "../../assets/cv.pdf";
import { FC, useState, useEffect } from "react";
import ActionButton from "../common/controls/action-button/ActionButton";
import MenuButton from "./mobile-menu/MobileMenu";

interface NavbarProps {
  mobileMenuVisibilityChanged: (visible: boolean) => void;
  visible: boolean;
}

const Navbar: FC<NavbarProps> = (props) => {
  const [isOnTop, setOnTop] = useState(true);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [navBarVisible, setNavbarVisible] = useState(true);
  const [navbarBlur, setNavbarBlur] = useState(10);
  const [navbarBrightness, setNavbarBrightness] = useState(80);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }

    if (scrollY >= 0 && scrollY < 400) {
      const blurValue = window.scrollY < 0 ? 0 : window.scrollY / 10 + 12;
      setNavbarBlur(blurValue);

      const brightnessValue = (1 - window.scrollY / 200) * 100 - 20;
      setNavbarBrightness(brightnessValue > 0 ? brightnessValue : 0);
    } else {
      setNavbarBlur(12);
    }

    if (scrollY > 200) {
      const prevScrollY = scrollY;

      if (prevScrollY < currentScrollY) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    } else {
      setNavbarVisible(true);
    }
    setCurrentScrollY(scrollY);
  };

  const onClick = () => {
    window.open(cvFile, "_blank");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setNavbarVisible(props.visible)

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props.visible]);

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={`${navBarVisible ? "" : "navbar-hidden"}`}>
      <div>
        {windowWidth > 900 ? (
          <div
            className={`${
              isOnTop ? "navbar-desktop" : "navbar-desktop shadow"
            }`}
            style={{
              WebkitBackdropFilter: `blur(${navbarBlur}px) brightness(${navbarBrightness}%)`,
              backdropFilter: `blur(${navbarBlur}px) brightness(${navbarBrightness}%)`,
            }}
          >
            <div>
              <a className="logo" href="/">
                PRYHAZHANAU 
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
              PRYHAZHANAU
            </a>
            <MenuButton
              menuVisibilityChanged={(visible) =>
                props.mobileMenuVisibilityChanged(visible)
              }
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
