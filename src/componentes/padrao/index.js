import Cabecalho from "../cabecalho";
import { Outlet } from "react-router-dom";

export default function Padrao() {
  return (
    <main>
      <Cabecalho />

      <Outlet />
    </main>
  );
}
