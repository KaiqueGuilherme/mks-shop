import { CardContainer, CardContent, CardDescription, CardImage, CardTitle } from "./Card.style"
import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
  }

export const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
      <CardContainer>
        <CardImage src={image} alt="Card Image" />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </CardContainer>
    );
  };