import React from "react";
import { ErrorMessage, InputStyled } from "./InputStyles";

const Input = ({ label, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputStyled id={name} name={name} type={type} />
      <ErrorMessage>ERROR!</ErrorMessage>
    </div>
  );
};

export default Input;
