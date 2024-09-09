import React from 'react';

interface CheckboxProps {
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

const CustomCheckBox: React.FC<CheckboxProps> = ({ name, checked, onChange, label }) => {
    return (
        <label className="custom-checkbox">
            {label && <span style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>{label}</span>}

            <input
                type="checkbox"
                name={name}
                style={{ width: '20px', height: '20px' }}
                checked={checked}
                onChange={onChange}
            />
        </label>
    );
};

export default CustomCheckBox;
