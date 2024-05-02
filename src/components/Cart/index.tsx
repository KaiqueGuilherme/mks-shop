import cartimg from '../../Assets/Cart.svg'
import { CartContainer, H1ItemCart, ItensCart } from './Cart.style'

export const Cart = () => {

    return (
        <>
            <CartContainer>
                <ItensCart>
                    <img src={cartimg} alt="" />
                    <H1ItemCart>0</H1ItemCart>
                </ItensCart>
            </CartContainer>
        </>
    )
}