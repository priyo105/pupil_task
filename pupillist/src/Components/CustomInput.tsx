import React from 'react';
import "../styles/Input.css"
interface InputProps {
    type?: string;
    name: string;
    value: string | boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const CustomInput: React.FC<InputProps> = ({ type = 'text', name, value, onChange, placeholder }) => {
    return (
        <div>
            <p style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>{name}</p>
            <input
                type={type}
                name={name}
                value={value + ""}
                onChange={onChange}
                placeholder={placeholder}
                className="custom-input"
            />
        </div>
    );
};

export default CustomInput;
