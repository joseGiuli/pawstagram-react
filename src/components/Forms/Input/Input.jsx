import React from "react";
import { ErrorMessage, InputStyled } from "./InputStyles";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputStyled
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default Input;
