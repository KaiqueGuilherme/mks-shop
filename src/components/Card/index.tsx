import { ButtonCart, BuyPrice, CardContainer, CardContent, CardDescription, CardImage, CardTitle, Price } from "./Card.style"
import cartImage from '../../Assets/shopping-bag.svg'
import React from 'react';
import { motion } from 'framer-motion';


interface CardProps {
  id: number,
  photo: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  addToCart: (id: number) => void; 
}

export const Card: React.FC<CardProps> = ({ id, photo, name, brand, description, price, addToCart }) => {

  const handleAddToCart = () => {
    addToCart(id); 
  };


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
      <ButtonCart onClick={handleAddToCart}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={cartImage} alt="Cart" />
          <h1>Comprar</h1>
        </motion.div>
      </ButtonCart>
    </CardContainer>
  );
};
