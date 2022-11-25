import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function ClienteAtualizar() {
  const url = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [listaResultado, setListaResultado] = useState("");

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      nome: event.target.nome.value,
      telefone: event.target.telefone.value,
      endereco: event.target.endereco.value,
    };

    await Api.putRequest(url.pathname, dados);

    navigate("/clientes");
  };

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getAllRequest(`/cliente/${params.id}`);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  if (!listaResultado) {
    return <Carregando />;
  }

  return (
    <DivConteudo largura="60" espacoEsquerda="20">
      <Titulo>Editar Cliente {params.id}</Titulo>
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
              defaultValue={listaResultado.nome}
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
              defaultValue={listaResultado.telefone}
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
              defaultValue={listaResultado.endereco}
            />
          </div>
        </div>

        <Botao descricao=" Editar " onClick={enviar} icon="bi bi-pencil" />
      </form>
    </DivConteudo>
  );
}
