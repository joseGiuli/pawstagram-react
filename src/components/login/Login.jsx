import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginResetPassword from "./LoginResetPassword";
import LoginLostPassword from "./LoginLostPassword";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar-conta" element={<LoginCreate />} />
        <Route path="/esqueci-a-senha" element={<LoginLostPassword />} />
        <Route path="/alterar-senha" element={<LoginResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
