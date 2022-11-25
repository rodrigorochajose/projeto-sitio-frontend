import { format, addDays } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function EntregaAtualizar() {
  const url = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [listaResultado, setListaResultado] = useState("");
  const [entregaPaga, setEntregaPaga] = useState(false);

  function alterarValue() {
    if (entregaPaga) {
      setEntregaPaga(false);
    } else {
      setEntregaPaga(true);
    }
  }

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      endereco: event.target.endereco.value,
      data_entrega: event.target.data_entrega.value,
      entregue: event.target.entregue.value,
    };

    await Api.putRequest(url.pathname, dados);

    navigate("/entregas");
  };

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getAllRequest(`/entrega/${params.id}`);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  if (!listaResultado) {
    return <Carregando />;
  }

  return (
    <DivConteudo largura="60" espacoEsquerda="20">
      <Titulo>Editar Entrega {params.id}</Titulo>
      <form className={`form`} onSubmit={enviar}>
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
        <div className={`row mb-3`}>
          <label htmlFor="data_entrega" className={`col-sm-2 col-form-label`}>
            Data Entrega
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="data_entrega"
              name="data_entrega"
              defaultValue={format(
                addDays(new Date(listaResultado.data_entrega), 1),
                "dd/MM/yyyy"
              )}
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="entregue" className={`col-sm-2 col-form-label`}>
            Entregue
          </label>
          <div className={`col-sm-10`}>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="entregue"
                name="entregue"
                defaultValue={entregaPaga}
                onClick={alterarValue}
              />
            </div>
          </div>
        </div>
        <Botao descricao=" Editar " onClick={enviar} icon="bi bi-pencil" />
      </form>
    </DivConteudo>
  );
}
