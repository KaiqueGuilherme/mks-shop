import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { HomeContent, UlProducts } from "./Home.style";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity?: number;
}

async function fetchProducts(): Promise<{ products: Product[] }> {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  return response.json();
}

export const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ['Product'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!data || !Array.isArray(data.products)) {
    return <div>Erro: os dados dos produtos não estão no formato esperado</div>;
  }

  const handleAddToCart = (item: Product) => {
    const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
   const itemInCart = cartItems.find(cartItem => cartItem.id === id);
    if (itemInCart) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const handleDeleteFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const totalCartItems = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <>
      <Header cartItemCount={totalCartItems} onCartClick={handleCartClick} />
      <HomeContent>
        <UlProducts>
          {data.products.map(item => (
            <li key={item.id}>
              <Card 
                id={item.id} 
                name={item.name} 
                brand={item.brand} 
                description={item.description} 
                photo={item.photo} 
                price={`R$ ${parseFloat(item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`} 
                addToCart={() => handleAddToCart(item)} 
              />
            </li>
          ))}
        </UlProducts>
      </HomeContent>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        items={cartItems} 
        onAddItem={handleAddToCart} 
        onRemoveItem={handleRemoveFromCart} 
        onDeleteItem={handleDeleteFromCart}
      />
      <Footer />
    </>
  );
};
