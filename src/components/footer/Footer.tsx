import "./Footer.css";
import Constants from "../../common/ConstantsObj";
import ImageLinkElement from "./ImageLinkElement";
import { ReactSVG } from "react-svg";

import LinkedinSVG from "../../assets/icons/linkedin.svg"
import LocationSVG from "../../assets/icons/location.svg"
import MailSVG from "../../assets/icons/mail.svg"
import TelegramSVG from "../../assets/icons/telegram.svg"
import GitHubSVG from "../../assets/icons/github.svg"
import InstagramSVG from "../../assets/icons/instagram.svg"
import VercelSVG from "../../assets/vercel.svg"

function Footer() {
  function openVercelLink() {
    window.open("https://vercel.com", "_blank");
  }

  return (
    <footer>
      <div className="footer-top-container-wrapper"></div>
      <div className="footer-top-container">
        <div className="info-block">
          <div className="title-wrapper">
            <p className="body-bold-aluminor">Pages</p>
          </div>
          <div className="info-list-wrapper">
            <ImageLinkElement text="Home" link=""/>
            <ImageLinkElement text="Career" link="/Career"/>
            <ImageLinkElement text="Projects" link="/Projects"/>
          </div>
        </div>

        <div className="info-block">
          <div className="title-wrapper">
            <p className="body-bold-aluminor">Contact info</p>
          </div>
          <div className="info-list-wrapper">
            <ImageLinkElement img={LocationSVG} text={
              `${Constants.contact.address.index} ${Constants.contact.address.street}\n${Constants.contact.address.city}, ${Constants.contact.address.country}`
              } link={Constants.contact.address.link} inNewWindow={false}/>
            <ImageLinkElement img={MailSVG} text={Constants.contact.email.display} inNewWindow={false} link={Constants.contact.email.link}/>
            <ImageLinkElement img={LinkedinSVG} text={Constants.contact.linkedIn.display} link={Constants.contact.telegram.link} inNewWindow={true}/>
            <ImageLinkElement img={TelegramSVG} text={Constants.contact.telegram.display} link={Constants.contact.telegram.link} inNewWindow={true}/>
            <ImageLinkElement img={GitHubSVG} text={Constants.contact.github.display} link={Constants.contact.github.link} inNewWindow={true}/>
            <ImageLinkElement img={InstagramSVG} text={Constants.contact.instagram.display} link={Constants.contact.instagram.link} inNewWindow={true}/>
          </div>
        </div>
        <div className="inspiration-wrapper" onClick={() => openVercelLink()}>
          <p className="body-text-aluminor">Design inspiration</p>
          <ReactSVG src={VercelSVG}></ReactSVG>
        </div>
      </div>

      <div className="footer-copyrights-container">
        <p className="copyright">
          Copyright © 2023 Uladzimir Pryhazhanau . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
