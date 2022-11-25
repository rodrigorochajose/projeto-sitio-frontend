import { TituloLogin } from "./styles";
import Botao from "../../componentes/botao";
import bg from "../../assets/farm-bg.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { DivConteudo } from "../../componentes/divConteudo/styles";
import { Api } from "../../api/api";

export default function Login() {
  const url = useLocation();
  const navigate = useNavigate();

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      login: event.target.login.value,
      senha: event.target.senha.value,
    };

    const resultado = await Api.postRequest(url.pathname, dados);

    const resultadoJson = await resultado.json();

    if (resultadoJson.hasOwnProperty("error"))
      return console.log("nao vai logar otario");

    localStorage.setItem("token", resultadoJson.token);

    navigate("/");
  };

  return (
    <DivConteudo largura="40" espacoEsquerda="30">
      <img src={bg} />
      <div>
        <br />
        <TituloLogin>Sistema de Vendas</TituloLogin>
        <br />
        <form className={`form`} onSubmit={enviar}>
          <div className={`row mb-2`}>
            <label htmlFor="login" className={`col-sm-2 col-form-label`}>
              <b>Login</b>
            </label>
            <div className={`col-sm-10`}>
              <input
                type="text"
                className={`form-control`}
                id="login"
                name="login"
              />
            </div>
          </div>
          <br />
          <div className={`row mb-2`}>
            <label htmlFor="senha" className={`col-sm-2 col-form-label`}>
              <b>Senha</b>
            </label>
            <div className={`col-sm-10`}>
              <input
                type="password"
                className={`form-control`}
                id="senha"
                name="senha"
              />
            </div>
          </div>
          <Botao
            onClick={enviar}
            descricao=" Entrar"
            icon="bi bi-box-arrow-right"
          />
        </form>
      </div>
    </DivConteudo>
  );
}
