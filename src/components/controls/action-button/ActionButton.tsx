import "./ActionButton.css"

import { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ActionButton: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="action-button body-text" onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;