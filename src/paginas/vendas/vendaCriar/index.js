import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { DivQuantidade, Quantidade } from "./styles";

export default function VendaCriar() {
  const url = useLocation();
  const navigate = useNavigate();

  const [listaClientes, setListaClientes] = useState("");
  const [listaProdutos, setListaProdutos] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    if (!listaClientes) {
      selectClientes();
    }
    if (!listaProdutos) {
      selectProdutos();
    }
  });

  const selectClientes = async () => {
    const resultado = await Api.getAllRequest("/clientes");

    const dados = await resultado.json();

    setListaClientes(dados);
  };

  const selectProdutos = async () => {
    const resultado = await Api.getAllRequest("/produtos");

    const dados = await resultado.json();

    setListaProdutos(dados);
  };

  if (!listaClientes || !listaProdutos) {
    return <div>Carregando</div>;
  }

  const enviar = async (event) => {
    event.preventDefault();

    const elementosProdutoId = document.querySelectorAll(".classeProdutoId");
    const elementosQuantidade = document.querySelectorAll(".classeQuantidade");

    let endereco,
      vetorProdutos = [],
      vetorQuantidades = [],
      produtoValores,
      quantidadeValores;

    listaClientes.forEach((element) => {
      if (element.id == event.target.cliente_id.value) {
        endereco = element.endereco;
      }
    });

    if (elementosProdutoId.length > 1) {
      event.target.produto_id.forEach((item, index) => {
        vetorProdutos[index] = item.value;
      });
      produtoValores = vetorProdutos.toString();
    }

    if (elementosQuantidade.length > 1) {
      event.target.qtd.forEach((item, index) => {
        vetorQuantidades[index] = item.value;
      });
      quantidadeValores = vetorQuantidades.toString();
    }

    if (!produtoValores) produtoValores = event.target.produto_id.value;

    if (!quantidadeValores) quantidadeValores = event.target.qtd.value;

    const dados = {
      cliente_id: event.target.cliente_id.value,
      total: event.target.total.value,
      produto_id: produtoValores,
      quantidade: quantidadeValores,
      endereco: endereco,
    };

    await Api.postRequest(url.pathname, dados);

    navigate("/vendas");
  };

  function adicionaProduto() {
    const divPai = document.getElementById("divProduto");
    const divFilho = document.getElementById("ProdutoContent");
    const divClone = divFilho.cloneNode(true);
    divPai.appendChild(divClone);
  }

  return (
    <DivConteudo largura="80" espacoEsquerda="10">
      <Titulo>Nova Venda</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="cliente_id" className={`col-sm-3 col-form-label`}>
            Cliente
          </label>
          <div className={`col-sm-9`}>
            <select
              class="form-select"
              aria-label="Default select example"
              name="cliente_id"
            >
              {listaClientes.map((item) => (
                <option value={item.id}>{item.nome}</option>
              ))}
            </select>
          </div>
        </div>

        <div id="divProduto">
          <div className={`row mb-3`} id="ProdutoContent">
            <label htmlFor="produto_id" className={`col-sm-3 col-form-label`}>
              Produto
            </label>
            <div className={`col-sm-3`}>
              <select
                className={`form-select classeProdutoId`}
                name="produto_id"
                id="produto_id"
              >
                {listaProdutos.map((item) => (
                  <option class="opcoesProdutos" value={item.id}>
                    {item.descricao}
                  </option>
                ))}
              </select>
            </div>
            <DivQuantidade className={`input-group sm-3`}>
              <Quantidade
                className={`form-control classeQuantidade`}
                type="text"
                value={quantidade}
                name="qtd"
                id="qtd"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => setQuantidade(quantidade + 1)}
              >
                +
              </button>
            </DivQuantidade>
            <DivQuantidade className={`input-group sm-3`}>
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={adicionaProduto}
              >
                + Produto
              </button>
            </DivQuantidade>
          </div>
        </div>

        <div className={`row mb-3`}>
          <label htmlFor="total" className={`col-sm-3 col-form-label`}>
            Total
          </label>
          <div className={`col-sm-9`}>
            <input
              type="text"
              className={`form-control`}
              id="total"
              name="total"
            />
          </div>
        </div>

        <Botao
          descricao=" Cadastrar "
          onClick={enviar}
          icon="bi bi-cart-plus"
        />
      </form>
    </DivConteudo>
  );
}
