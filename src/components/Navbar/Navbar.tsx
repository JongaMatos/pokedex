import React from 'react'
import { Container, Link, Logo, LinkContainer } from './NavbarStyles'

export default function Navbar() {
  return (
    <Container >
      <Logo to="/">Pokedex</Logo>
      <LinkContainer>
        <Link to="/pokemons/"> Pokemons</Link>
        <Link to="/types/">Tipos</Link>
      </LinkContainer>
    </Container>
  )
}
