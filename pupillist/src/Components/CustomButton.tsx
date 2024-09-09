import React from 'react';
import "../styles/Button.css"

interface ButtonProps {
    onClick: () => void;
    label: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, label, type = 'button', className = '' }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`custom-button ${className}`}
        >
            {label}
        </button>
    );
};

export default CustomButton;
