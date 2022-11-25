import { useNavigate, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function ClienteCriar() {
  const url = useLocation();
  const navigate = useNavigate();

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      nome: event.target.nome.value,
      telefone: event.target.telefone.value,
      endereco: event.target.endereco.value,
    };

    await Api.postRequest(url.pathname, dados);

    navigate("/clientes");
  };

  return (
    <DivConteudo largura="40" espacoEsquerda="30">
      <Titulo>Novo Cliente</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="nome" className={`col-sm-2 col-form-label`}>
            Nome
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="nome"
              name="nome"
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="telefone" className={`col-sm-2 col-form-label`}>
            Telefone
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="telefone"
              name="telefone"
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="endereco" className={`col-sm-2 col-form-label`}>
            Endereço
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="endereco"
              name="endereco"
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
