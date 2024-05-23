import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { AnimationContainer } from "../../styles/GlobalStyles";
import Error from "../Helpers/Error";
import {
  CadastroWrapper,
  FormStyled,
  LoginSection,
  FormWrapper,
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
    <LoginSection>
      <FormWrapper>
        <AnimationContainer>
          <Title margin="0 0 1.5rem">Login</Title>
          <FormStyled action="" onSubmit={handleSubmit}>
            <Input label="Usuario" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            <Error error={error} />
          </FormStyled>
          <CadastroWrapper>
            <Link to="/login/criar" className="esqueci">
              Esqueci a senha
            </Link>

            <Subtitle>Cadastre-se!</Subtitle>
            <Paragraph>
              Ainda não possui conta? cadastre-se agora mesmo!
            </Paragraph>
            <Button>
              <Link to="/esqueci-a-senha">Cadastro</Link>
            </Button>
          </CadastroWrapper>
        </AnimationContainer>
      </FormWrapper>
    </LoginSection>
  );
};

export default LoginForm;
