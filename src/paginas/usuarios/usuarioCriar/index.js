import { useNavigate, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function UsuarioCriar() {
  const url = useLocation();
  const navigate = useNavigate();

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      apelido: event.target.apelido.value,
      login: event.target.login.value,
      senha: event.target.senha.value,
    };

    await Api.postRequest(url.pathname, dados);

    navigate("/usuarios");
  };

  return (
    <DivConteudo largura="40" espacoEsquerda="30">
      <Titulo>Novo Usuário</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="apelido" className={`col-sm-2 col-form-label`}>
            Apelido
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="apelido"
              name="apelido"
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="login" className={`col-sm-2 col-form-label`}>
            Login
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
        <div className={`row mb-3`}>
          <label htmlFor="senha" className={`col-sm-2 col-form-label`}>
            Senha
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
          descricao=" Cadastrar "
          onClick={enviar}
          icon="bi bi-person-plus-fill"
        />
      </form>
    </DivConteudo>
  );
}
