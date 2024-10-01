import React from 'react';
import welcomeLogo from "../assets/welcomeLogo.svg";
import { FormLayoutProps } from "../types/FormTypes";

const FormLayout: React.FC<FormLayoutProps> = ({ title, description, children, onSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="form">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </form>
      <div className="rightlogo-container">
        <img src={welcomeLogo} alt="welcomelogo" />
      </div>
    </div>
  );
};

export default FormLayout;
