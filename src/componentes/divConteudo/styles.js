import styled from "styled-components";

export const DivConteudo = styled.div`
  width: ${(props) => props.largura}%;
  margin-left: ${(props) => props.espacoEsquerda}%;
  background: white;
  padding: 20px;
  border-radius: 20px;
  margin-top: 2%;
`;
