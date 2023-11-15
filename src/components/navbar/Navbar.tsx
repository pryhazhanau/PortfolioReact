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

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
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
      <div className={`${isOnTop ? "container" : "container shadow"}`}>
        <div className="child">
          <a className="logo" href="/">
            PRY.
          </a>
        </div>
        {windowWidth > 900 ? (
          <div className="menu">
            <div className="menu-item-container">
              <a className="menu-item gradient-hover body-text" href="/">
                Home
              </a>
            </div>
            <div className="menu-item-container">
              <a className="menu-item gradient-hover body-text" href="/career">
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
            <ActionButton className="cv-button" label="CV" onClick={onClick} />
          </div>
        ) : (
          <MenuButton
            menuVisibilityChanged={(visible) => menuVisibilityChanged(visible)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
