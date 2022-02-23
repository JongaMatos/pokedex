import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { FaBars } from 'react-icons/fa';
import { VscClose as close } from "react-icons/vsc";

interface IDrop {
    isopen: boolean
}

export const Container = styled.nav`
    background-color: #111032;
    
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;

    position: sticky;
    z-index: 1;
    top:0;
    
    
    `

export const Logo = styled(NavLink)`
    /* @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap'); */
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    /* color: #C3CBF4; */
    color:white;
    font-size: 1.8rem;

    background-color: inherit;
    
    
    justify-self: flex-start;
    padding: 0.3rem;

    @media screen and (max-width: 806px) {
    font-size: 1.5rem;

    }


`
export const LinkContainer = styled.div<IDrop>`
    /* background-color: white; */
    width: 50%;
    background-color: #111032;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 806px) {

        position: absolute;
        top: 0;
        left: 0;
        padding-top: 9rem;

        width: 100%;
        height: 100vh;
        
        
        display: ${props => props.isopen ? "flex" : "none"};
        flex-direction: column;
        justify-content: flex-start;
        
    }
`
export const CloseDropdownButton = styled(close) <IDrop>`

    display: none;
    position: absolute;
    right: 0;
    top: 0;

    background-color: inherit;
    /* color: #C3CBF4; */
    color:white;


    font-size: 2rem;
    /* width: 10rem; */
    margin-top: 1.3rem;
    margin-right: 1.8rem;

    @media screen and (max-width: 806px) {
        display: ${props => props.isopen ? "block" : "none"};
    }


`


export const Link = styled(NavLink)`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
    
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    /* color: #C3CBF4; */
    color:white;

    font-size: 1.3rem;

    border-radius: 5px;



    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.2rem ;
    padding-bottom: 0.2rem;


    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 806px) {
        margin: 1.5rem;
    }


`

export const About = styled.a`
     @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
    
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    color: #111032;
    /* background-color: #C3CBF4; */
    background-color:white;


    font-size: 1.3rem;

    border-radius: 5px;


    align-self: center;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.2rem ;
    padding-bottom: 0.2rem;


    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 806px) {
        
        margin: 1.5rem;


    }



`


export const Hamburguer = styled(FaBars) <IDrop>`
    display: none;
    color: #fff;
    @media screen and (max-width: 806px) {
    display: ${props => props.isopen ? "none" : "block"};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
