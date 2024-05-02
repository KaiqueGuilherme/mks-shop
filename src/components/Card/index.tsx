import { ButtonCart, BuyPrice, CardContainer, CardContent, CardDescription, CardImage, CardTitle, Price } from "./Card.style"
import React from 'react';

interface CardProps {
    photo: string;
    name: string;
    brand: string;
    description: string;
    price: string;
  }



export const Card: React.FC<CardProps> = ({ photo, name, brand, description, price}) => {
  

  return (
      <CardContainer>
        <CardImage src={photo} alt="Card Image" />
        <CardContent>
          
          <CardDescription>{brand}</CardDescription>
          <BuyPrice>
          <CardTitle>{name}</CardTitle>
          <Price>{price}</Price>
          </BuyPrice>
          <CardDescription>{description}</CardDescription>
          
        </CardContent>
        <ButtonCart onClick={mad}>Comprar</ButtonCart>
      </CardContainer>
    );
  };