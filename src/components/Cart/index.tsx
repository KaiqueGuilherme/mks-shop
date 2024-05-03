import React from 'react';
import { motion } from 'framer-motion';
import cartImage from '../../Assets/Cart.svg';
import { CartContainer, ItensCart, H1ItemCart } from './Cart.style';

interface CartProps {
  onClick: () => void; 
  itemCount: number;
}

export const Cart: React.FC<CartProps> = ({ onClick, itemCount }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
     <CartContainer onClick={onClick}>
        <ItensCart>
          <img src={cartImage} alt="Cart" />
          <H1ItemCart>{itemCount}</H1ItemCart>
        </ItensCart>
      </CartContainer>
    </motion.div>
  );
};

