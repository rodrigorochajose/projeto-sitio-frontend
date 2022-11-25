import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Api } from "../../../api/api";
import Botao from "../../../componentes/botao";
import Carregando from "../../../componentes/carregando";
import { DivConteudo } from "../../../componentes/divConteudo/styles";
import { Titulo } from "../../../componentes/titulo/styles";

export default function UsuarioAtualizar() {
  const url = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [listaResultado, setListaResultado] = useState("");

  const enviar = async (event) => {
    event.preventDefault();

    const dados = {
      apelido: event.target.apelido.value,
    };

    await Api.putRequest(url.pathname, dados);

    navigate("/usuarios");
  };

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getAllRequest(`/usuario/${params.id}`);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  if (!listaResultado) {
    return <Carregando />;
  }

  return (
    <DivConteudo largura="60" espacoEsquerda="20">
      <Titulo>Editar Usuário {params.id}</Titulo>
      <form className={`form`} onSubmit={enviar}>
        <div className={`row mb-3`}>
          <label htmlFor="apelido" className={`col-sm-2 col-form-label`}>
            Apelido
          </label>
          <div className={`col-sm-10`}>
            <input
              type="text"
              className={`form-control`}
              id="apelido"
              name="apelido"
              defaultValue={listaResultado.apelido}
            />
          </div>
        </div>

        <Botao descricao=" Editar " onClick={enviar} icon="bi bi-pencil" />
      </form>
    </DivConteudo>
  );
}
