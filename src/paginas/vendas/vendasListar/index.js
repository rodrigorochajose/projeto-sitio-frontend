import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { Table } from "../../../componentes/table/styles";
import { format, addDays } from "date-fns";

export default function VendasListar() {
  const url = useLocation();
  const [listaResultado, setListaResultado] = useState("");

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getAllRequest(url.pathname);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  if (!listaResultado) {
    return <Carregando />;
  }

  listaResultado.forEach((element) => {
    if (element.pago == false) {
      element.pago = "Não";
    } else if (element.pago == true) {
      element.pago = "Sim";
    }
  });

  return (
    <DivConteudo largura="80" espacoEsquerda="10">
      <Titulo>Vendas</Titulo>

      <Table
        className={`table table-striped table-bordered table-hover table-bordered`}
      >
        <tbody>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>
              <b>Cliente</b>
            </td>
            <td>
              <b>Data da Venda</b>
            </td>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>Pago</b>
            </td>
            <td>
              <b>Detalhes</b>
            </td>
            <td>
              <b>Editar</b>
            </td>
          </tr>
          {listaResultado.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.cliente_id}</td>
              <td>
                {format(addDays(new Date(item.data_venda), 1), "dd/MM/yyyy")}
              </td>
              <td>{`R$ ${item.total}`}</td>
              <td>{item.pago}</td>
              <td>
                <Link to={`/venda/${item.id}`}>
                  <i class="bi bi-info-circle-fill"></i>
                </Link>
              </td>
              <td>
                <Link to={`/venda/atualizar/${item.id}`}>
                  <i class="bi bi-pencil"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DivConteudo>
  );
}
