import React from "react";
import {
  FormStyled,
  Section,
  SectionAnimated,
} from "../../styles/GlobalStyles";
import Title from "../../ui/typography/Title";
import Input from "../Forms/Input/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

import { USER_POST } from "../../Api";
import Button from "../Forms/Button/Button";
import { UserContext } from "../../UserContext";
import Error from "../Helpers/Error";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <SectionAnimated>
      <Title>Cadastro</Title>
      <FormStyled onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </FormStyled>
    </SectionAnimated>
  );
};

export default LoginCreate;
