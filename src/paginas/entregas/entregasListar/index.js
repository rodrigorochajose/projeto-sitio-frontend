import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { Table } from "../../../componentes/table/styles";
import { format, addDays } from "date-fns";

export default function EntregasListar() {
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
    if (element.entregue == false) {
      element.entregue = "Não";
    } else if (element.entregue == true) {
      element.entregue = "Sim";
    }
  });

  return (
    <DivConteudo largura="80" espacoEsquerda="10">
      <Titulo>Entregas</Titulo>

      <Table
        className={`table table-striped table-bordered table-hover table-bordered`}
      >
        <tbody>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>
              <b>Venda ID</b>
            </td>
            <td>
              <b>Endereço</b>
            </td>
            <td>
              <b>Data da Entrega</b>
            </td>
            <td>
              <b>Entregue</b>
            </td>
            <td>
              <b>Editar</b>
            </td>
          </tr>
          {listaResultado.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.venda_id}</td>
              <td>{item.endereco}</td>
              <td>
                {format(addDays(new Date(item.data_entrega), 1), "dd/MM/yyyy")}
              </td>
              <td>{item.entregue}</td>
              <td>
                <Link to={`/entrega/atualizar/${item.id}`}>
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
