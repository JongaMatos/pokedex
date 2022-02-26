import React, { useState } from 'react'
import { Container, Link, Logo, LinkContainer, About, Hamburguer, CloseDropdownButton } from './NavbarStyles'


export default function Navbar() {

  const [hamburgerClick, setHamburguerClick] = useState(false);

  const handleHamburgerClick = () => {
    setHamburguerClick(!hamburgerClick);
  
  }
  const close = () => {
    if (hamburgerClick)
      setHamburguerClick(false);
  }

  return (
    <Container >
      <Logo to="/">Pokedex</Logo>
      <LinkContainer isopen={hamburgerClick}>
       
        <CloseDropdownButton isopen={hamburgerClick} onClick={() => { close() }} />

        <Link to="/type/" onClick={close}>Tipos</Link>

        <Link to="/pokemons/" onClick={close}> Pokemons</Link>

        <About
          href="https://github.com/JongaMatos/pokedex/blob/main/README.md#start"
          target='_blank'
          onClick={close} >
          Sobre
        </About>

      </LinkContainer>
      <Hamburguer isopen={hamburgerClick} onClick={handleHamburgerClick} />
    </Container>
  )
}
