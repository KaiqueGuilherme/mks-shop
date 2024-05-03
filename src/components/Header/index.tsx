// Header.tsx
import React from 'react';
import { Cart } from "../Cart";
import { H1Header, Pheader, StylesHeader, StylesItensPrimary } from "./Header.style";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void; 
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <>
      <StylesHeader>
        <StylesItensPrimary>
          <H1Header>MKS</H1Header>
          <Pheader>Sistemas</Pheader>
        </StylesItensPrimary>
        <Cart onClick={onCartClick} itemCount={cartItemCount} />
      </StylesHeader>
    </>
  );
};

