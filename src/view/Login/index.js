import * as styled from "./components/componentsLogin";
import logo from "../../components/assets/Driven_white1.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../components/context/context";
import { useContext } from "react";

export default function Login() {
  let { setTokenLogin } = useContext(UserContext);
  let navigate = useNavigate();
  //
  let [email, setEmail] = useState("");
  let [senha, setSenha] = useState("");

  //
  function loginApp() {
    let promisse = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",
      {
        email: email,
        password: senha,
      }
    );

    promisse.then((element) => {
      setTokenLogin(element.data.token);
      localStorage.setItem("token", `${element.data.token}`);
      navigate("/subscription", { replace: true });
    });
    promisse.catch((element) =>
      alert(
        element +
          `
    códigos de erro:
    402 - preencha os campos corretamente
    401 - Crie uma conta ou preencha corretamente seus dados `
      )
    );
  }

  return (
    <styled.MainContentLogin>
      <img src={logo} alt="" />
      <styled.FormLogin>
        <input
          type="text"
          placeholder="email"
          onChange={(element) => setEmail(element.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(element) => setSenha(element.target.value)}
        />
      </styled.FormLogin>
      <button onClick={loginApp}>Entrar</button>
      <Link to="/sign-up">
        <p>Não possui uma conta? Cadastre-se</p>
      </Link>
    </styled.MainContentLogin>
  );
}
