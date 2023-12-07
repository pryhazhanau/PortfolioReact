import Socials from "../socials/Socials"
import "./MasterContainer.css"
import { ReactNode, FC } from "react"

interface MasterContainerProps {
  children: ReactNode;
  maxWidth?: number | string;
}

const MasterContainer: FC<MasterContainerProps> = ({ children, maxWidth }) => {
  return (
    <>
      <div className="master-container">
        <div className="master-wrapper" style={{maxWidth: maxWidth}}>{children}</div>
      </div>

      <Socials />
    </>
  )
}

export default MasterContainer
