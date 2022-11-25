import { useNavigate, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function ProdutoCriar() {
  const url = useLocation();
  const navigate = useNavigate();

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      descricao: event.target.descricao.value,
      valor: event.target.valor.value,
    };

    await Api.postRequest(url.pathname, dados);

    navigate("/produtos");
  };

  return (
    <DivConteudo largura="40" espacoEsquerda="30">
      <Titulo>Novo Produto</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="descricao" className={`col-sm-2 col-form-label`}>
            Descricao
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="descricao"
              name="descricao"
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="valor" className={`col-sm-2 col-form-label`}>
            Valor
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="valor"
              name="valor"
            />
          </div>
        </div>
        <Botao
          descricao=" Cadastrar "
          onClick={enviar}
          icon="bi bi-plus-circle"
        />
      </form>
    </DivConteudo>
  );
}
