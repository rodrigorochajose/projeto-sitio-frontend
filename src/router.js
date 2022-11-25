import { BrowserRouter, Routes, Route } from "react-router-dom";
import Padrao from "./componentes/padrao";
import Home from "./paginas/home";
import Login from "./paginas/login";
import VendaCriar from "./paginas/vendas/vendaCriar";
import VendasListar from "./paginas/vendas/vendasListar";
import VendaDetalhada from "./paginas/vendas/vendaDetalhada";
import VendaAtualizar from "./paginas/vendas/vendaAtualizar";

import EntregaCriar from "./paginas/entregas/entregaCriar";
import EntregasListar from "./paginas/entregas/entregasListar";
import EntregaAtualizar from "./paginas/entregas/entregaAtualizar";

import ProdutoCriar from "./paginas/produtos/produtoCriar";
import ProdutosListar from "./paginas/produtos/produtosListar";
import ProdutoAtualizar from "./paginas/produtos/produtoAtualizar";

import ClienteCriar from "./paginas/clientes/clienteCriar";
import ClientesListar from "./paginas/clientes/clientesListar";
import ClienteAtualizar from "./paginas/clientes/clienteAtualizar";

import UsuarioCriar from "./paginas/usuarios/usuarioCriar";
import UsuariosListar from "./paginas/usuarios/usuariosListar";
import UsuarioAtualizar from "./paginas/usuarios/usuarioAtualizar";
import UsuarioDeletar from "./paginas/usuarios/usuarioDeletar";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Padrao />}>
          <Route index element={<Home />} />

          <Route exact path="/venda/nova" element={<VendaCriar />} />
          <Route path="/vendas" element={<VendasListar />} />
          <Route exact path="/venda/:id" element={<VendaDetalhada />} />
          <Route
            exact
            path="/venda/atualizar/:id"
            element={<VendaAtualizar />}
          />

          <Route exact path="/entrega/nova" element={<EntregaCriar />} />
          <Route path="/entregas" element={<EntregasListar />} />
          <Route
            exact
            path="/entrega/atualizar/:id"
            element={<EntregaAtualizar />}
          />

          <Route exact path="/produto/novo" element={<ProdutoCriar />} />
          <Route path="/produtos" element={<ProdutosListar />} />
          <Route
            exact
            path="/produto/atualizar/:id"
            element={<ProdutoAtualizar />}
          />

          <Route exact path="/cliente/novo" element={<ClienteCriar />} />
          <Route path="/clientes" element={<ClientesListar />} />
          <Route
            exact
            path="/cliente/atualizar/:id"
            element={<ClienteAtualizar />}
          />

          <Route exact path="/usuario/novo" element={<UsuarioCriar />} />
          <Route path="/usuarios" element={<UsuariosListar />} />
          <Route
            exact
            path="/usuario/atualizar/:id"
            element={<UsuarioAtualizar />}
          />
          <Route
            exact
            path="/usuario/deletar/:id"
            element={<UsuarioDeletar />}
          />
        </Route>

        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
