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
import SocialFooterIcon from "./SocialFooterIcon";
import FlexBox from "../common/box/FlexBox";

function Footer() {
  function openVercelLink() {
    window.open("https://vercel.com", "_blank");
  }

  return (
    <footer>
    <div className="footer-background"/>
    <HorizontalSeparator/>
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
          </div>
        </div>
        <div className="inspiration-wrapper" onClick={() => openVercelLink()}>
          <p className="body-text-aluminor">Design inspiration</p>
          <ReactSVG src={VercelSVG}/>
        </div>
      </div>
      <div className="socials-container">
            <SocialFooterIcon img={LinkedinSVG} link={Constants.contact.linkedIn.link}/>
            <SocialFooterIcon img={TelegramSVG} link={Constants.contact.telegram.link}/>
            <SocialFooterIcon img={GitHubSVG} link={Constants.contact.github.link}/>
            <SocialFooterIcon img={InstagramSVG} link={Constants.contact.instagram.link}/>
      </div>
      <HorizontalSeparator/>
      <FlexBox alignItems="center" justifyContent="center" height={50}>
        <p className="copyright">
          Copyright © 2023 Uladzimir Pryhazhanau . All rights reserved.
        </p>
      </FlexBox>
    </footer>
  );
}

function HorizontalSeparator() {
  return (
    <div className="footer-horizontal-separator"/>
  )
}

export default Footer;
