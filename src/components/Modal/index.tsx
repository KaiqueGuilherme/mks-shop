import React from 'react';
import { CloseButton, ModalContent, ModalOverlay } from './Modal.style';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  onAddItem: (id: number) => void;
  onRemoveItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
}
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, items, onAddItem, onRemoveItem, onDeleteItem }) => {
  if (!isOpen) return null;

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Itens no Carrinho:</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <div>{item.name}</div>
              <div>Preço: R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              <div>Quantidade: {item.quantity}</div>
              <button onClick={() => onAddItem(item)} aria-label={`${item.name}`}>+</button>
              <button onClick={() => onRemoveItem(item.id)} aria-label={`${item.name}`}>-</button>
              <button onClick={() => onDeleteItem(item.id)} aria-label={`${item.name} `}>Delete</button>
            </li>
          ))}
        </ul>
        <div>Preço Total: R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
      </ModalContent>
    </ModalOverlay>
  );
};
