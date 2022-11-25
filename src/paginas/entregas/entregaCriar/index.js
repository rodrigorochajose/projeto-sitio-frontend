import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function EntregaCriar() {
  const url = useLocation();
  const navigate = useNavigate();

  const [listaVendas, setListaVendas] = useState("");

  useEffect(() => {
    if (!listaVendas) {
      selectVendas();
    }
  });

  const selectVendas = async () => {
    const resultado = await Api.getAllRequest("/vendas");

    const dados = await resultado.json();

    setListaVendas(dados);
  };

  if (!listaVendas) {
    return <div>Carregando</div>;
  }

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      venda_id: event.target.venda_id.value,
      endereco: event.target.endereco.value,
      data_entrega: event.target.data_entrega.value,
    };

    await Api.postRequest(url.pathname, dados);

    navigate("/entregas");
  };

  return (
    <DivConteudo largura="50" espacoEsquerda="25">
      <Titulo>Nova Entrega</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="venda_id" className={`col-sm-3 col-form-label`}>
            ID Venda
          </label>
          <div className={`col-sm-9`}>
            <select
              class="form-select"
              aria-label="Default select example"
              id="venda_id"
              name="venda_id"
            >
              {listaVendas.map((item) => (
                <option value={item.id}>{item.id}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={`row mb-3`}>
          <label htmlFor="endereco" className={`col-sm-3 col-form-label`}>
            Endereço
          </label>
          <div className={`col-sm-9`}>
            <input
              type="text"
              className={`form-control`}
              id="endereco"
              name="endereco"
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label
            htmlFor="data_entrega"
            className={`col-sm-3 col-form-label`}
            nowrap
          >
            Data da Entrega
          </label>
          <div className={`col-sm-9`}>
            <input
              type="text"
              className={`form-control`}
              id="data_entrega"
              name="data_entrega"
            />
          </div>
        </div>
        <Botao
          descricao=" Cadastrar "
          onClick={enviar}
          icon="bi bi-send-plus"
        />
      </form>
    </DivConteudo>
  );
}
