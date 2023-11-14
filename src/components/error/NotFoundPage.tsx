import { useRouteError } from "react-router-dom";
import "./NotFoundPage.css";
import ActionButton from "../common/controls/action-button/ActionButton";

export default function NotFoundPage() {
  return (
    <div className="not-found-page gradient-section-background-radial">
      <div className="not-found-container">
        <div className="not-found-title-wrapper">
          <p>404</p>
        </div>
        <div className="not-found-subtitles-wrapper">
          <p>PAGE NOT FOUND</p>
          <p>Sorry, I can’t find the page you are looking for.</p>
        </div>
      </div>
      <ActionButton label="back to home" link="/"></ActionButton>
    </div>
  );
}
