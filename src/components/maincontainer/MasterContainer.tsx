import Footer from "../footer/Footer";
import "./MasterContainer.css";
import { ReactNode, FC } from "react";

interface MasterContainerProps {
  children: ReactNode;
}

const MasterContainer: FC<MasterContainerProps> = ({children}) => {
  return (
    <>
    <div className="master-container">
      {children}
    </div>
    <Footer/>
    </>
  );
}

export default MasterContainer;
