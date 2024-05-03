import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0; 
  bottom: 0;
  width: 35%; 
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%; 
  height: 100%;
  background: #0F52BA;
  display: flex;
  flex-direction: column;
  gap: 50px;
  scroll-behavior: inherit;
`;

export const CloseButton = styled.button`
width: 38px;
height: 38px;
top: 39px;
left: 1380px;
gap: 0px;
opacity: 0px;
font-family: "Montserrat", sans-serif;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  font-size: 28px;
  font-weight: 400;
  background: #000000;
border-radius: 100vw;

`;

export const ContentNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

export const H1Modal = styled.h2`
font-family: "Montserrat", sans-serif;
line-height: 32.91px;
font-weight: 700;
color: white;
font-size: 27px;
line-height: 32.91px;
padding: 0 15px;
`
export const UlModal = styled.ul`
display: flex;
flex-direction: column;
gap: 25px;
`

export const CardImage = styled.img`
width:57px;
height: 57px;
`

export const ListOffModal = styled.li`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
background: #FFFFFF;
width: 100%;
height: 130px;
border-radius: 150px;


`
export const InformationProduct = styled.li`
display: flex;
flex-direction: column;
`
export const MenuProduct = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`

export const Pname = styled.p`
font-family: "Montserrat", sans-serif;
font-size:13px ;
`

export const PQuanty = styled.p`
font-family: "Montserrat", sans-serif;
font-size: 10px ;
`


export const ButtonAdd = styled.button`
border: none;
background-color: white;
font-size: 25px ;
font-weight: 200;
`
export const MenuAdd = styled.div`
display: flex;
gap: 15px;
align-items: center;
border-width: 0px, 0px, 0px, 1px;
border-style:solid;
border-color: #BFBFBF;
`

export const Foooter = styled.div`
display: flex;
gap: 15px;
align-items: center;
border-width: 0px, 0px, 0px, 1px;
border-style:solid;
border-color: #BFBFBF;
`
