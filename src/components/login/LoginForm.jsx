import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { AnimationContainer, Section } from "../../styles/GlobalStyles";
import Error from "../Helpers/Error";
import {
  FormWrapper,
  BackgroundComponent,
  RegistrarWrapper,
  LoginFormStyled,
} from "./LoginFormStyles";
import Paragraph from "../../ui/typography/Paragraph";
import Title from "../../ui/typography/Title";
import Subtitle from "../../ui/typography/Subtitle";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <Section>
      <FormWrapper>
        <AnimationContainer>
          <Title margin="0 0 1.5rem">Login</Title>
          <LoginFormStyled action="" onSubmit={handleSubmit}>
            <Input label="Usuario" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            <Link to="/esqueci-a-senha" className="esqueci">
              Esqueci a senha
            </Link>
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            <Error error={error} />
          </LoginFormStyled>
          <RegistrarWrapper>
            Não tem uma conta? <Link to="/login/criar">Registre-se agora!</Link>
          </RegistrarWrapper>
        </AnimationContainer>
        <div>
          <BackgroundComponent />
        </div>
      </FormWrapper>
    </Section>
  );
};

export default LoginForm;
