import styled from "styled-components";

export default function Botao({ descricao, icon }) {
  const Div = styled.div`
    text-align: center;
    margin-top: 35px;
  `;
  const Button = styled.button`
    background: rgb(2, 0, 36);
    background: linear-gradient(
      125deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(51, 130, 250, 1) 0%,
      rgba(15, 62, 164, 1) 81%,
      rgba(18, 75, 157, 1) 100%,
      rgba(25, 25, 129, 1) 100%
    );
  `;
  return (
    <Div>
      <Button type="submit" className={`btn btn-primary`}>
        <i className={icon}></i>
        {descricao}
      </Button>
    </Div>
  );
}
