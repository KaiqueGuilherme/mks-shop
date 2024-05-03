
import { Cart } from "../Cart";
import { H1Header, Pheader, StylesHeader, StylesItensPrimary } from "./Header.style"

interface HeaderProps {
    cartItemCount: number;
  }
  export const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {

    return (
        <StylesHeader>
            <StylesItensPrimary >
                <H1Header>MKS</H1Header>
                <Pheader>Sistemas</Pheader>
            </StylesItensPrimary>
            <Cart itemCount={cartItemCount} />
        </StylesHeader>
    )
}