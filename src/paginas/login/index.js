import { ContentDiv, Input, MainDiv, Titulo, BotaoLogar } from "./styles";
import bg from "../../assets/farm-bg.jpg";

export default function Login() {
  return (
    <MainDiv>
      <img src={bg} />
      <div>
        <Titulo>Sistema de Vendas</Titulo>
        <ContentDiv>
          <b>Login</b>
          <Input></Input>
        </ContentDiv>
        <ContentDiv>
          <b>Senha</b>
          <Input></Input>
        </ContentDiv>
        <BotaoLogar>Entrar</BotaoLogar>
      </div>
    </MainDiv>
  );
}
