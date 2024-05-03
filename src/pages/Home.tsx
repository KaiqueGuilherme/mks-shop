import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { HomeContent, UlProducts } from "./Home.style";
import { Footer } from "../components/Footer";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  return response.json();
}

export const Home: React.FC = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const { data, error, isLoading } = useQuery({
    queryKey: ['Product'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Caregando...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  if (!data || !Array.isArray(data.products)) {
    return <div>Erro: os dados dos produtos não estão no formato esperado</div>;
  }

  const handleAddToCart = () => {
    setCartItemCount(prevCount => prevCount + 1); 
  };

  return (
    <>
      <Header cartItemCount={cartItemCount} />
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
                price={`R$ ${parseFloat(item.price).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`} 
                addToCart={handleAddToCart} 
              />
            </li>
          ))}
        </UlProducts>
      </HomeContent>
      <Footer />
    </>
  );
};

