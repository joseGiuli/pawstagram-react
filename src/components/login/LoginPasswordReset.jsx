import React from "react";
import Input from "../Forms/Input/Input";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button/Button";
import useFetch from "../../Hooks/useFetch";
import { FormStyled, SectionAnimated } from "../../styles/GlobalStyles";
import { PASSWORD_RESET } from "../../Api";
import Title from "../../ui/typography/Title";
import Error from "../Helpers/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helpers/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <SectionAnimated>
      <Head title="Mudar senha" />
      <Title color="black">Mudar senha</Title>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Alterando...</Button>
        ) : (
          <Button>Mudar senha</Button>
        )}
      </FormStyled>
      <Error error={error} />
    </SectionAnimated>
  );
};

export default LoginPasswordReset;
