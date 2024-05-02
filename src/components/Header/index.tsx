import { Cart } from "../Cart"
import {H1Header, Pheader, StylesHeader, StylesItensPrimary } from "./Header.style"

export const Header = () => {

    return (
    <StylesHeader>
            <StylesItensPrimary >
            <H1Header>MKS</H1Header>
            <Pheader>Sistemas</Pheader>
            </StylesItensPrimary>
                <Cart></Cart>

    </StylesHeader>
    )
}