import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { Table } from "../../../componentes/table/styles";
import ModalDeletar from "../../../componentes/modalDeletar";

export default function UsuariosListar() {
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

  const enviar = async (id) => {
    console.log(id);
    //await Api.deleteRequest(`/${model}/deletar/${id}`);
  };

  return (
    <DivConteudo largura="80" espacoEsquerda="10">
      <Titulo>Usuários</Titulo>
      <Table
        className={`table table-striped table-bordered table-hover table-bordered`}
      >
        <tbody>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>
              <b>Apelido</b>
            </td>
            <td>
              <b>Login</b>
            </td>
            <td>
              <b>Editar</b>
            </td>
            <td>
              <b>Excluir</b>
            </td>
          </tr>
          {listaResultado.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.apelido}</td>
              <td>{item.login}</td>
              <td>
                <Link to={`/usuario/atualizar/${item.id}`}>
                  <i class="bi bi-pencil"></i>
                </Link>
              </td>
              <td>
                <Link to={`/usuario/deletar/${item.id}`}>
                  <i class="bi bi-trash"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DivConteudo>
  );
}
