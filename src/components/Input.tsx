import React from 'react';
import { InputProps } from "../types/InputTypes"; 
const Input: React.FC<InputProps> = ({ type, id, name, placeholder, value, onChange, required = false }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
