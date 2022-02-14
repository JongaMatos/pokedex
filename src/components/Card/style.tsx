import styled from "styled-components/macro";

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 20%;

    align-items: center;
    
    margin: auto;

    margin-bottom: 1em;
    
    /* background-color: black; */

    border-color: black;
    border-style: solid;
    border-width: thick;

`

export const PokemonImage = styled.img`

    max-width: 100%;
`

export const PokemonName = styled.div`
    margin-top:5px;
    margin-bottom: 5px;
`