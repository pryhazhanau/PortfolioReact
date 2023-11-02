import "./ActionButton.css"

import { FC } from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const ActionButton: FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <div className={className}>
    <button className="action-button body-text" onClick={onClick}>
      {label}
    </button>
    </div>
  );
};

export default ActionButton;