import React from "react";
import BeerPage from "./BeerPage";
import { useState } from "react";

const LoginPage = (props) => {
  const [token, setToken] = useState(""); // uso el estado para almacenar el token despues del fetch

  const handlerLogin = (event) => {
    event.preventDefault();
    const login = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    };

    fetch(
      "https://tp2-backend.azurewebsites.net/api/users/login",
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setToken(data.token); // almaceno el token
      });
  };

  return (
    <div>
      <form onSubmit={handlerLogin}>
        <h2>Login</h2> <br />
        <input type="email" name="email" placeholder="Email"></input>
        <br />
        <input type="password" name="password" placeholder="Password"></input>
        <br />
        <button type="submit">Login</button>
      </form>

      {/* Renderiza la página de mascotas solo si tienes un token */}
      {token && <BeerPage token={token} />}
    </div>
  );
};

export default LoginPage;
