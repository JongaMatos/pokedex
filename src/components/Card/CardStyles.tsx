import styled from "styled-components/macro";

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 1%;

    max-width: 12rem;
    margin-left: 2%;
    margin-right: 2%;

    align-items: center;

    margin-bottom: 1em;
    
    /* background-color: black; */

    border-color: black;
    border-style: solid;
    border-width: 3px;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    }

`

export const PokemonImage = styled.img`

    max-width: 100%;
`

export const PokemonName = styled.div`

    margin-bottom: 0.3rem;

    font-size: large;

    align-self: flex-start;

`
export const PokemonId= styled.div`

    font-size: medium;

    align-self: flex-end;


`