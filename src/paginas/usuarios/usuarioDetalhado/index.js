import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Api } from "../../../api/api";

export default function UsuarioDetalhado() {
  const url = useLocation();

  const [listaResultado, setListaResultado] = useState("");

  useEffect(() => {
    if (!listaResultado) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await Api.getRequest(url.pathname);

    const dados = await resultado.json();

    setListaResultado(dados);
  };

  if (!listaResultado) {
    return <div>Carregando...</div>;
  }

  return <div className="read-all">{listaResultado.apelido}</div>;
}
