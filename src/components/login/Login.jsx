import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginResetPassword from "./LoginResetPassword";
import { UserContext } from "../../UserContext";
import { LoginSection, LoginWrapper } from "./LoginStyles";
import { Section } from "../../styles/GlobalStyles";
import NotFound from "../NotFound";
import LoginPasswordLost from "./LoginPasswordLost";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <LoginSection>
      <LoginWrapper>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar-conta" element={<LoginCreate />} />
          <Route path="esqueci-a-senha" element={<LoginPasswordLost />} />
          <Route path="alterar-senha" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoginWrapper>
    </LoginSection>
  );
};

export default Login;
