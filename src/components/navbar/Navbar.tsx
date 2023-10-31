import "./Navbar.css";
import "../../common/css/gradient.css";
import cvFile from "../../assets/cv.pdf";
import { useState } from "react";
import ActionButton from "../common/controls/action-button/ActionButton";

function Navbar() {
  const [isOnTop, setOnTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  };

  const onClick = () => {};

  window.addEventListener("scroll", handleScroll);

  return (
    <nav>
      <div className={`${isOnTop ? "container" : "container shadow"}`}>
        <div className="child">
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
                <a className="menu-item gradient-hover body-text" href="/portfolio">
                  Career
                </a>
              </div>
              <div className="menu-item-container">
                <a className="menu-item gradient-hover body-text" href="/portfolio">
                  Portfolio
                </a>
              </div>
              <ActionButton label="CV" onClick={onClick} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
