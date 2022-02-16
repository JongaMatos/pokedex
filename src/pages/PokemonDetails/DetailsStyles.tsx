import styled from "styled-components";




export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: fit-content;

    border-style: solid;
    border-width: 15px;
    border-radius: 15px;
    border-color:${(props: any) => (props.color)} ;

    /* opacity: 0.5; */

    
`
export const Data = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* background-color: blue; */
    background-color:${(props: any) => (props.color)} ;
    
    padding-top: 0.5rem;


    font-size: 1.5rem;

`
export const DataText = styled.p`
    background-color: inherit;

`

export const Types = styled.div`
    display: flex;
    justify-content: space-around;
    /* margin: auto; */
    flex-wrap: wrap;

`
export const Type = styled.div`
    min-width: 20%;

    font-size: 1.5em;
    display: flex;

  
`
export const Text = styled.p`
    background-color:${(props: any) => (props.color)} ;
    color:#EFEFEF;

    margin-right:1.5rem;
    border-radius: 0.7rem;

    padding-left:8%;
    padding-right:8%;
    padding-top: 2%;
    padding-bottom: 6%;

    
`



export const PokemonImage = styled.img`
    max-width: 100%;
    align-self: center;
    /* background-color:${(props: any) => (props.color)} ; */
    /* margin: 1rem; */

    /* border-color:${(props: any) => (props.color)} ;
    border-style: solid;
    border-width: thick;
    border-radius: 15px; */
`