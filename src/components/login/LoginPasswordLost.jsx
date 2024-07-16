import React from "react";
import Title from "../../ui/typography/Title";
import { FormStyled, SectionAnimated } from "../../styles/GlobalStyles";
import Input from "../Forms/Input/Input";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button/Button";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../Api";
import Error from "../Helpers/Error";
import Paragraph from "../../ui/typography/Paragraph";
import Head from "../Helpers/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("esqueci-a-senha", "resetar-senha"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <SectionAnimated>
      <Head title="Perdi a senha" />
      <Title margin="0 0 2.5rem">Perdeu a senha?</Title>
      {data ? (
        <Paragraph color="green" weight="500">
          {data}
        </Paragraph>
      ) : (
        <FormStyled onSubmit={handleSubmit}>
          <Input
            label="E-mail ou usuario"
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
        </FormStyled>
      )}

      <Error error={error} />
    </SectionAnimated>
  );
};

export default LoginPasswordLost;

{
  /* {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />

        */
}
