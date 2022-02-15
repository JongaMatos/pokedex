import styled from "styled-components/macro";

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 12rem;
    margin-left: 2%;
    margin-right: 2%;

    align-items: center;

    margin-bottom: 1em;
    
    /* background-color: black; */

    border-color: black;
    border-style: solid;
    border-width: thick;

    &:hover{
        cursor: pointer;
    }

`

export const PokemonImage = styled.img`

    max-width: 100%;
`

export const PokemonName = styled.div`
    margin-top:5px;
    margin-bottom: 5px;
`