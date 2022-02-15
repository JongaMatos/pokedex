import styled from "styled-components";

export const PokemonContainer = styled.div`
    margin-top: 5%;
    margin-left: 3%;
    display: flex;
    flex-direction: column;
    max-width: 50%;
`
export const TopData = styled.div`
    display: flex;
    /* background-color: blue; */
    justify-content: space-between;
    margin-right: 5%;
    font-size: 1.5rem;

`

export const Types = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin: auto; */
    flex-wrap: wrap;

`
export const Type = styled.div`
    border-radius: 10%;
    min-width: 20%;
    background-color:${(props: any) => (props.color)} ;
    color:#f8f5f5;
    font-size: 1.5em;

`
export const Text = styled.p`
    
`



export const PokemonImage = styled.img`
    max-width: 75%;
    align-self: center;
`