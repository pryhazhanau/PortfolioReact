import Socials from "../socials/Socials";
import "./MasterContainer.css";
import { ReactNode, FC } from "react";

interface MasterContainerProps {
  children: ReactNode;
}

const MasterContainer: FC<MasterContainerProps> = ({ children }) => {
  return (
    <>
      <div className="master-container">
        <div className="master-wrapper">{children}</div>
      </div>

      <Socials />
    </>
  );
};

export default MasterContainer;
