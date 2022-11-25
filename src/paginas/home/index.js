import { Link } from "react-router-dom";
import { Container, DivPrincipal, linkstyle } from "./styles";

export default function Home() {
  return (
    <DivPrincipal>
      <br />
      Olá, Seja Bem Vindo !
      <br />
      <br />
      <div class="row">
        <Container className={`col-sm`}>
          <Link style={linkstyle} to="/vendas">
            Vendas
          </Link>
        </Container>
      </div>
      <div class="row">
        <Container className={`col-sm`}>
          <Link style={linkstyle} to="/entregas">
            Entregas
          </Link>
        </Container>
      </div>
      <div class="row">
        <Container className={`col-sm`}>
          <Link style={linkstyle} to="/produtos">
            Produtos
          </Link>
        </Container>
      </div>
      <div class="row">
        <Container className={`col-sm`}>
          <Link style={linkstyle} to="/usuarios">
            Usuários
          </Link>
        </Container>
      </div>
      <div class="row">
        <Container className={`col-sm`}>
          <Link style={linkstyle} to="/clientes">
            Clientes
          </Link>
        </Container>
      </div>
    </DivPrincipal>
  );
}
