import "./ProjectsPage.css";
import MasterContainer from "../master-container/MasterContainer";
import AppCard from "./app-card/AppCard";

function ProjectsPage() {

  return (
      <MasterContainer>
        <div className="applications-wrapper">
          <AppCard/>
          <AppCard/>
          <AppCard/>
          <AppCard/>
        </div>
      </MasterContainer>
  );
}

export default ProjectsPage;
