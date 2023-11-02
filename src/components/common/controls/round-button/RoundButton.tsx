import "./RoundButton.css"

import { FC } from 'react';

interface ButtonProps {
  active: boolean;
  label: string;
  className?: string;
  onClick: () => void;
}

const RoundButton: FC<ButtonProps> = ({ active, label, className, onClick }) => {
  return (
    <div className={className}>
    <button className={`grid-button${active ? "-active" : ""} subtitle-secondary disable-copy`} onClick={onClick}>
      {label}
    </button>
    </div>
  );
};

export default RoundButton;