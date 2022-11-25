import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function ProdutoAtualizar() {
  const url = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [listaResultado, setListaResultado] = useState("");

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      descricao: event.target.descricao.value,
      valor: event.target.valor.value,
      estoque: event.target.estoque.value,
    };

    await Api.putRequest(url.pathname, dados);

    navigate("/produtos");
  };

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getAllRequest(`/produto/${params.id}`);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  if (!listaResultado) {
    return <Carregando />;
  }

  return (
    <DivConteudo largura="60" espacoEsquerda="20">
      <Titulo>Editar Produto {params.id}</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="descricao" className={`col-sm-2 col-form-label`}>
            Descrição
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="descricao"
              name="descricao"
              defaultValue={listaResultado.descricao}
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
              defaultValue={listaResultado.valor}
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="estoque" className={`col-sm-2 col-form-label`}>
            Estoque
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="estoque"
              name="estoque"
              defaultValue={listaResultado.estoque}
            />
          </div>
        </div>
        <Botao descricao=" Editar " onClick={enviar} icon="bi bi-pencil" />
      </form>
    </DivConteudo>
  );
}
