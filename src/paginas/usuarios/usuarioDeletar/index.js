import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";
import { Div } from "./styles";

export default function UsuarioDeletar() {
  const url = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const enviar = async (event) => {
    event.preventDefault();

    await Api.deleteRequest(url.pathname);

    navigate("/usuarios");
  };

  return (
    <DivConteudo largura="60" espacoEsquerda="20">
      <Titulo>Deletar Usuário {params.id}</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <Div>
          <b>Confirma a remoção do Usuário ?</b>
        </Div>
        <Div>
          <Link to="/usuarios">
            <Botao descricao=" Não " tipo="button" class="btn btn-secondary" />
          </Link>
          <Botao descricao=" Sim " class="btn btn-secondary" onClick={enviar} />
        </Div>
      </form>
    </DivConteudo>
  );
}
