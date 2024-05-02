import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin: 20px;
  background-color: #fff;
`;

// Estilizando a imagem do card
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Estilizando o conteúdo do card
export const CardContent = styled.div`
  padding: 16px;
`;

// Estilizando o título do card
export const CardTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

// Estilizando a descrição do card
export const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;