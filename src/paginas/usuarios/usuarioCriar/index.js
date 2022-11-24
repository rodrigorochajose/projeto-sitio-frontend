import { useLocation } from "react-router-dom";
import { Api } from "../../../api/api";

export default function UsuarioCriar() {
  const url = useLocation();

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      apelido: event.target.apelido.value,
      login: event.target.login.value,
      senha: event.target.senha.value,
      ativo: event.target.ativo.value,
    };

    const resultado = await Api.createRequest(url.pathname, dados);

    const jsonResultado = await resultado.json();

    console.log(jsonResultado);
  };

  return (
    <div className="create">
      <form className="form" onSubmit={enviar}>
        <label htmlFor="apelido" className="form__label">
          Apelido:
        </label>
        <input
          type="text"
          id="apelido"
          name="apelido"
          className="form__input"
        />

        <label htmlFor="login" className="form__label">
          Login:
        </label>
        <input type="text" id="login" name="login" className="form__input" />

        <label htmlFor="senha" className="form__label">
          Senha:
        </label>
        <input type="text" id="senha" name="senha" className="form__input" />

        <input type="hidden" id="ativo" name="ativo" value="true" />

        <input
          type="submit"
          value="Adicionar"
          className="button button--green button--full"
        />
      </form>
    </div>
  );
}
