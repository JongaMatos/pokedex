import styled from "styled-components/macro";

export const PokemonCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 12rem;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 1em;
    padding: 1%;

    border-color: #EFEFEF;
    background-color: ${(props) => (props.color)};
    border-style: solid;
    border-width: 3px;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 805px)
    {
        width:25%;

        margin-left: auto;
        margin-right: auto;

        border-width: 1.5px;

    }

`

export const PokemonImage = styled.img`
    /* background-color: inherit; */

    max-width: 100%;
    
`

export const PokemonName = styled.div`
    background-color: inherit;
    color: white;
    font-size: large;
    font-weight: bold;

    align-self: flex-start;

    @media (max-width: 805px)
    {
        margin-top: 0.5rem;
        margin-left: 0.3rem;
        font-size: 100%;
        font-weight: 500;
        
    }

`
export const PokemonId = styled.div`
    background-color: inherit;
    color: #EFEFEF;

    font-size: medium;

    align-self: flex-end;

    @media (max-width: 805px)
    {
        margin-right: 0.2rem;
        font-size: 100%;
        font-weight: 450;
        
    }


`