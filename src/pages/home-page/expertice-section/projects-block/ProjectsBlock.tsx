import ActionButton from "../../../../components/common/controls/action-button/ActionButton";
import "./ProjectsBlock.css";

import AppsImg from "../../../../assets/illustrations/apps_fade.png";

function ProjectsBlock() {
  return (
    <>
      <div className="projects-block">
        <div className="projects-text-block">
          <p className="body-text-spacero">
            There are several projects I worked on. From large enerprise to
            user-centric product applications.
          </p>
        </div>
        <div className="projects-illistration-block">
          <img src={AppsImg}></img>
          <div className="projects-button-wrapper">
            <ActionButton label="Explore" style="outline" link="/portfolio" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsBlock;
