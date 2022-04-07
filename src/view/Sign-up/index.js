import * as style from "./components/SignUpComponents";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  let [nome, setNome] = useState("");
  let [cpf, setCpf] = useState("");
  let [email, setEmail] = useState("");
  let [senha, setSenha] = useState("");
  let navigate = useNavigate();

  function SignUp(e) {
    e.preventDefault();
    let promisse = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",
      {
        email: email,
        name: nome,
        cpf: cpf,
        password: senha,
      }
    );
    promisse.then((element) => {
      console.log(element);
      navigate("/", { replace: true });
    });
    promisse.catch((element) => alert(element));
  }
  return (
    <style.MainContentSignUp>
      <style.FormSignUp>
        <form onSubmit={SignUp}>
          <input
            type="text"
            placeholder="Nome"
            onChange={(element) => setNome(element.target.value)}
          />
          <input
            type="text"
            placeholder="CPF"
            onChange={(element) => setCpf(element.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(element) => setEmail(element.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(element) => setSenha(element.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </style.FormSignUp>

      <Link to="/">
        <p>Já possuí uma conta? Entre</p>
      </Link>
    </style.MainContentSignUp>
  );
}
