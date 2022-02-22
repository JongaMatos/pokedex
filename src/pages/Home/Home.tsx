import React from 'react'
import { Container, Header, Pikachu, Text, Button } from './HomeStyles'
import pikachu from '../../assets/pikachu-home.png'

export default function Home() {

    return (
        <Container>
            <Header>
                React Pokedex
            </Header>
            <Pikachu src={pikachu} alt="Pikachu" />

            <Text>
                Pokedex criada para aprender mais sobre ReactJs e Typescript, com o auxilio da PokeApi (uma API gratuita que armazena informações sobre Pokemon).
            </Text>

            <Button to='/pokemons'>Ver Pokemons</Button>
            
        </Container>
    )
}
