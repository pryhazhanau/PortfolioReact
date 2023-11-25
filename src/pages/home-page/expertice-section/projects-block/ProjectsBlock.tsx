import ActionButton from "../../../../components/common/controls/action-button/ActionButton";
import "./ProjectsBlock.css";

import AppsImg from "../../../../assets/illustrations/apps_fade.png";
import Text from "../../../../components/common/style/Text";
import { Typography } from "../../../../components/common/style/interface/Typography";
import { Colors } from "../../../../components/common/style/interface/Colors";

function ProjectsBlock() {
  return (
    <>
      <div className="projects-block">
        <div className="projects-text-block">
          <Text
            text="There are several projects I worked on. From large enerprise to
            user-centric product applications."
            typography={Typography.BodyText}
            color={Colors.TitaniumGray}
          />
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
