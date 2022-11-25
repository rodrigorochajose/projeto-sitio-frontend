import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function VendaAtualizar() {
  const url = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [listaResultado, setListaResultado] = useState("");
  const [vendaPaga, setVendaPaga] = useState(false);

  function alterarValue() {
    if (vendaPaga) {
      setVendaPaga(false);
    } else {
      setVendaPaga(true);
    }
  }

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      total: event.target.total.value,
      pago: event.target.pago.value,
    };

    await Api.putRequest(url.pathname, dados);

    navigate("/vendas");
  };

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getAllRequest(`/venda/${params.id}`);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  if (!listaResultado) {
    return <Carregando />;
  }

  return (
    <DivConteudo largura="40" espacoEsquerda="30">
      <Titulo>Editar Venda {params.id}</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="total" className={`col-sm-2 col-form-label`}>
            Total
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="total"
              name="total"
              defaultValue={`R$ ${listaResultado.vendaBusca.total}`}
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="pago" className={`col-sm-2 col-form-label`}>
            Pago
          </label>
          <div className={`col-sm-10`}>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="pago"
                name="pago"
                defaultValue={vendaPaga}
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
