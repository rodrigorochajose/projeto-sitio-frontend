import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import { Table, Titulo } from "../../../componentes/padrao/styles";
import Carregando from "../../../componentes/carregando";

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
    <div>
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
              <b>Excluir</b>
            </td>
            <td>
              <b>Excluir</b>
            </td>
          </tr>
          {listaResultado.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td>{item.endereco}</td>
              <td>
                <Link>
                  <i class="bi bi-pencil"></i>
                </Link>
              </td>
              <td>
                <a>
                  <i class="bi bi-trash"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
