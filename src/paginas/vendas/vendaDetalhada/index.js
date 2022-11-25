import React, { useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import { useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { DivQuantidade, Quantidade } from "../vendaCriar/styles";

export default function VendaDetalhada() {
  const url = useLocation();
  const [listaResultado, setListaResultado] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [listaProdutos, setListaProdutos] = useState("");

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }

    if (!nomeCliente) {
      obterCliente();
    }

    if (!listaProdutos) {
      obterProdutos();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getAllRequest(url.pathname);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  const obterCliente = async () => {
    const resultado = await Api.getAllRequest(
      `/cliente/${listaResultado.vendaBusca.cliente_id}`
    );

    const dados = await resultado.json();

    setNomeCliente(dados);
  };

  const obterProdutos = async () => {
    const resultado = await Api.getAllRequest("/produtos");

    const dados = await resultado.json();

    setListaProdutos(dados);
  };

  if (!listaResultado || !nomeCliente || !listaProdutos) {
    return <Carregando />;
  }

  let array = [];

  listaProdutos.forEach((element) => {
    listaResultado.vendaCompBusca.forEach((item, index) => {
      if (element.id == item.produto_id) {
        array[index] = element.descricao;
      }
    });
  });

  return (
    <DivConteudo largura="80" espacoEsquerda="10">
      <Titulo>Venda {listaResultado.vendaBusca.id}</Titulo>

      <form className={`form`}>
        <div className={`row mb-3`}>
          <label className={`col-sm-3 col-form-label`}>Cliente</label>
          <div className={`col-sm-9`}>
            <input
              className={`form-control`}
              type="text"
              value={nomeCliente.nome}
            />
          </div>
        </div>

        {listaResultado.vendaCompBusca.map((item, index) => (
          <div className={`row mb-3`}>
            <label className={`col-sm-3 col-form-label`}>Produto</label>
            <div className={`col-sm-4`}>
              <input
                className={`form-control`}
                type="text"
                value={array[index]}
              />
            </div>
            <DivQuantidade className={`input-group sm-5`}>
              <Quantidade
                className={`form-control classeQuantidade`}
                type="text"
                value={item.quantidade}
              />
            </DivQuantidade>
          </div>
        ))}

        <div className={`row mb-3`}>
          <label className={`col-sm-3 col-form-label`}>Total</label>
          <div className={`col-sm-9`}>
            <input
              className={`form-control`}
              type="text"
              value={`R$ ${listaResultado.vendaBusca.total}`}
            />
          </div>
        </div>
        <div className={`row mb-3`}>
          <label className={`col-sm-3 col-form-label`}>Data da Venda</label>
          <div className={`col-sm-9`}>
            <input
              className={`form-control`}
              type="text"
              value={format(
                addDays(new Date(listaResultado.vendaBusca.data_venda), 1),
                "dd/MM/yyyy"
              )}
            />
          </div>
        </div>
      </form>
    </DivConteudo>
  );
}
