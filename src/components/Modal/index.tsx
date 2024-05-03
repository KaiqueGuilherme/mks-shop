import React from 'react';
import { ButtonAdd, CardImage, CloseButton, ContentNav, Foooter, H1Modal, InformationProduct, InformationProduct2, ListOffModal, MenuAdd, MenuProduct, ModalContent, ModalOverlay, PQuanty, Pname, UlModal } from './Modal.style';

interface Item {
  id: number;
  photo: string;
  name: string;
  brand: string;
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
        <ContentNav>
        <H1Modal>Carrinho de compras:</H1Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        </ContentNav>
        <UlModal>
          {items.map(item => (
            <ListOffModal key={item.id}>
              <CardImage src={item.photo} alt="Card Image" />
              <InformationProduct>
              <Pname>{item.name}</Pname>
              </InformationProduct>
              <MenuProduct>
              <PQuanty>Qntd: </PQuanty>
              <MenuAdd >
              <ButtonAdd onClick={() => onAddItem(item)} aria-label={`${item.name}`}>+</ButtonAdd>
              <PQuanty>{item.quantity}</PQuanty>
              <ButtonAdd onClick={() => onRemoveItem(item.id)} aria-label={`${item.name}`}>-</ButtonAdd>
              </MenuAdd>
              </MenuProduct>
              <div>{item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              <CloseButton onClick={() => onDeleteItem(item.id)} aria-label={`${item.name} `}>&times;</CloseButton>
            </ListOffModal>
          ))}
        </UlModal>
        <Foooter>
            <div>Preço Total: R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
        </Foooter>
        
      </ModalContent>
    </ModalOverlay>
  );
};
