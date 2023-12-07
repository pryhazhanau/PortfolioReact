import "./BubbleButton.css"
import { MouseEvent } from "react"

import { FC } from 'react'

interface ButtonProps {
  active: boolean;
  label: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const BubbleButton: FC<ButtonProps> = ({ active, label, onClick }) => {
  return (
    <div>
        <div className={`bubble-button${active ? "-hidden" : ""} description disable-copy`} onClick={onClick}>
      {label}
        </div>
    </div>
  )
}

export default BubbleButton