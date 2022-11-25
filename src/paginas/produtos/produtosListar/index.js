import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { Table } from "../../../componentes/table/styles";

export default function ProdutosListar() {
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

  return (
    <DivConteudo largura="80" espacoEsquerda="10">
      <Titulo>Produtos</Titulo>

      <Table
        className={`table table-striped table-bordered table-hover table-bordered`}
      >
        <tbody>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>
              <b>Descrição</b>
            </td>
            <td>
              <b>Valor</b>
            </td>
            <td>
              <b>Estoque</b>
            </td>
            <td>
              <b>Editar</b>
            </td>
          </tr>
          {listaResultado.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.descricao}</td>
              <td>{item.valor}</td>
              <td>{item.estoque}</td>
              <td>
                <Link to={`/produto/atualizar/${item.id}`}>
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
