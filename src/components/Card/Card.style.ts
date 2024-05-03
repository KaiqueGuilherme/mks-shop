import styled from "styled-components";

export const CardContainer = styled.div`
  width: 218px;
  height: 320px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 111px;
  height: 138px;
  object-fit: scale-down;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const BuyPrice = styled.div`
 display: flex;
justify-content: space-between;
gap: 15px;
`;

export const CardDescription = styled.p`
  font-size: 10px;
  color: #666;
  line-height: 1.5;
`;


export const Price = styled.button`
font-family: "Montserrat", sans-serif;
font-size: 12px;
width: 110px;
height: 25px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
line-height: 15px;
text-align: left;
color: white;
border-radius: 5px;
opacity: 0px;
background: #373737;
`;


export const ButtonCart = styled.button`
background: #0F52BA;
width: 100%;
padding: 5px 0 5px;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
color: white;
font-family: "Montserrat", sans-serif;
border-color:  transparent;
`;
