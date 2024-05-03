import styled from "styled-components";


export const StylesHeader = styled.header`
  background: #0F52BA;
  width: 100%;
  height: 101px;
  display: flex;
  padding: 0 75px;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 5%;
  align-items: center;
`;

export const StylesItensPrimary = styled.div`
  color: white;
  display: flex;
  gap: 5px;
  align-items: baseline; /* Alinha os itens à parte inferior */
  padding: 5px;
`;


export const H1Header = styled.h1`
font-size: 40px;
font-weight: 500;
line-height: 19px;
text-align: left;
`;

export const Pheader = styled.p`
 font-family: "Montserrat", sans-serif;
font-weight: 300;
line-height: 19px;
text-align: left;
height: calc(100% + 15px);
`;
