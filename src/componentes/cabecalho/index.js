import { DivOpcao, Opcao, IconHome, IconLogout, linkstyle } from "./styles";
import bg from "../../assets/Barn_icon.png";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className={`container-fluid`}>
          <Link to="/" style={linkstyle}>
            <IconHome src={bg} />
            &nbsp; Sítio Paraiso
          </Link>

          <DivOpcao className={`collapse navbar-collapse`}>
            <Opcao className={`navbar-nav`}>
              <li className={`nav-item dropdown`}>
                <a
                  class={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vendas
                </a>
                <ul className={`dropdown-menu dropdown-menu-dark`}>
                  <li>
                    <Link
                      to="/venda/nova"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Nova Venda
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vendas"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Listar Vendas
                    </Link>
                  </li>
                </ul>
              </li>
            </Opcao>

            <Opcao className={`navbar-nav`}>
              <li className={`nav-item dropdown`}>
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Entregas
                </a>
                <ul className={`dropdown-menu dropdown-menu-dark`}>
                  <Link
                    to="/entrega/nova"
                    style={linkstyle}
                    className={`dropdown-item`}
                  >
                    Nova Entrega
                  </Link>
                  <Link
                    to="/entregas"
                    style={linkstyle}
                    className={`dropdown-item`}
                  >
                    Listar Entregas
                  </Link>
                </ul>
              </li>
            </Opcao>

            <Opcao className={`navbar-nav`}>
              <li className={`nav-item dropdown`}>
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produtos
                </a>
                <ul className={`dropdown-menu dropdown-menu-dark`}>
                  <li>
                    <Link
                      to="/produto/novo"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Novo Produto
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/produtos"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Listar Produtos
                    </Link>
                  </li>
                </ul>
              </li>
            </Opcao>

            <Opcao className={`navbar-nav`}>
              <li className={`nav-item dropdown`}>
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Clientes
                </a>
                <ul className={`dropdown-menu dropdown-menu-dark`}>
                  <li>
                    <Link
                      to="/cliente/novo"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Novo Cliente
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clientes"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Listar Clientes
                    </Link>
                  </li>
                </ul>
              </li>
            </Opcao>

            <Opcao className={`navbar-nav`}>
              <li className={`nav-item dropdown`}>
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Usuários
                </a>
                <ul className={`dropdown-menu dropdown-menu-dark`}>
                  <li>
                    <Link
                      to="/usuario/novo"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Novo Usuário
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/usuarios"
                      style={linkstyle}
                      className={`dropdown-item`}
                    >
                      Listar Usuários
                    </Link>
                  </li>
                </ul>
              </li>
            </Opcao>
          </DivOpcao>
          <Link to="/login">
            <IconLogout
              className={`bi bi-x-circle-fill`}
              onClick={() => localStorage.setItem("token", "")}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
