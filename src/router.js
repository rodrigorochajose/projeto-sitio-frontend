import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Login from "./paginas/login";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
