import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { Table } from "../../../componentes/table/styles";

export default function ClientesListar() {
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
      <Titulo>Clientes</Titulo>

      <Table
        className={`table table-striped table-bordered table-hover table-bordered`}
      >
        <tbody>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>
              <b>Nome</b>
            </td>
            <td>
              <b>Telefone</b>
            </td>
            <td>
              <b>Endereço</b>
            </td>
            <td>
              <b>Editar</b>
            </td>
          </tr>
          {listaResultado.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td>{item.endereco}</td>
              <td>
                <Link to={`/cliente/atualizar/${item.id}`}>
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
