import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface PasswordToggleProps {
  password: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({ password, name, placeholder, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={password}
        onChange={onChange}
        required
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </button>
    </div>
  );
};

export default PasswordToggle;
