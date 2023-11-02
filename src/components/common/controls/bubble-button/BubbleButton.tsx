import "./BubbleButton.css"

import { FC } from 'react';

interface ButtonProps {
  active: boolean;
  label: string;
  onClick?: () => void;
}

const BubbleButton: FC<ButtonProps> = ({ active, label, onClick }) => {
  return (
    <div>
        <div className={`bubble-button${active ? "-active" : ""} description disable-copy`} onClick={onClick}>
      {label}
        </div>
    </div>
  );
};

export default BubbleButton;