import { ContentDiv, Input, MainDiv, TituloLogin, BotaoLogar } from "./styles";
import bg from "../../assets/farm-bg.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <MainDiv>
      <img src={bg} />
      <div>
        <TituloLogin>Sistema de Vendas</TituloLogin>
        <ContentDiv>
          <b>Login</b>
          <Input></Input>
        </ContentDiv>
        <ContentDiv>
          <b>Senha</b>
          <Input type="password"></Input>
        </ContentDiv>
        <Link to="/">
          <BotaoLogar>Entrar</BotaoLogar>
        </Link>
      </div>
    </MainDiv>
  );
}
