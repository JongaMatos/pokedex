import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    /* background-color: red; */

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    margin-top: 3rem;


`
export const Header = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    font-family: 'Lato', sans-serif;
    font-weight: 300;

    margin-bottom: 2rem;

    color: white;

`



export const Pikachu = styled.img`
    /* width: 30%; */
    background-color: inherit;
    width: 18rem;

    margin-bottom: 3rem ;

    @media screen and (max-width:540px) {
        width:13rem ;
    }
`


export const Text = styled.p`

    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    font-family: 'Lato', sans-serif;
    font-size: 1.3rem;
    text-align:justify; 
    color: white;
    
    width:470px;
    max-width: 90%;

    @media screen and (max-width:540px) {
        max-width: 80%;

        font-size: 1rem;
        
    }

`

export const Button = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');

    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;

    text-decoration: none;

    margin-top: 3rem;

    background-color: white;
    color:#111032;

    padding-left: 0.5rem;
    padding-right: 0.5rem;

    border-radius: 6px;


`
