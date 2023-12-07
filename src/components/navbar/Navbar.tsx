import "./Navbar.css"
import "../../common/css/gradient.css"
import { FC, useState, useEffect } from "react"
import MenuButton from "./mobile-menu/MobileMenu"

interface NavbarProps {
  mobileMenuVisibilityChanged: (visible: boolean) => void;
  visible: boolean;
}

const Navbar: FC<NavbarProps> = (props) => {
  const [isOnTop, setOnTop] = useState(true)
  const [currentScrollY, setCurrentScrollY] = useState(0)
  const [navBarVisible, setNavbarVisible] = useState(true)

  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY > 0) {
      setOnTop(false)
    } else {
      setOnTop(true)
    }

    if (scrollY > 200) {
      const prevScrollY = scrollY

      if (prevScrollY < currentScrollY) {
        setNavbarVisible(true)
      } else {
        setNavbarVisible(false)
      }
    } else {
      setNavbarVisible(true)
    }
    setCurrentScrollY(scrollY)
  }


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setNavbarVisible(props.visible)

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [props.visible])

  window.addEventListener("scroll", handleScroll)

  return (
    <nav className={`${navBarVisible ? "" : "navbar-hidden"}`}>
      <div>
        {windowWidth > 900 ? (
          <div
            className={`${
              isOnTop ? "navbar-desktop" : "navbar-desktop shadow"
            }`}
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
  )
}

export default Navbar
