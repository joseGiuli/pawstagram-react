import React from "react";
import { Link, json } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />

        {/* <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        /> */}
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar-conta">Cadastro</Link>
    </div>
  );
};

export default LoginForm;
