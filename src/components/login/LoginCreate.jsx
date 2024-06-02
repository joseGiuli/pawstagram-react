import React from "react";
import { FormStyled, Section } from "../../styles/GlobalStyles";
import Title from "../../ui/typography/Title";
import Input from "../Forms/Input/Input";
import useForm from "../../Hooks/useForm";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Section>
      <Title>Cadastro</Title>
      <FormStyled onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
      </FormStyled>
    </Section>
  );
};

export default LoginCreate;
