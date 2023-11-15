import "./AppCard.css";
import ActionButton from "../../../components/common/controls/action-button/ActionButton";
import { FC } from "react";

interface AppCardProps {
  app: AppProject
}

const AppCard: FC<AppCardProps> = ({app}) => {
  return (
    <div className="app-card">
      <div>
        <div className="card-icon-app-wrapper">
          <img src={app.img}></img>
          <p className="subtitle-primary-aluminor">{app.title}</p>
        </div>
        <div className="card-body-wrapper">
          <p className="body-text-spacero">
            {app.body}
          </p>
        </div>
      </div>
      
      <div className="card-button-wrapper">
        { app.link != undefined && (
        <ActionButton label="explore" link={app.link} style="outline" linkTarget="blank"/>
        )}
      </div>
    </div>
  );
}

export default AppCard;
