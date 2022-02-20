import styled from "styled-components";
import { NavLink } from "react-router-dom"


export const Container = styled.nav`
    background-color: black;

    padding: 1rem;
    display: flex;
    justify-content: space-between;


`

export const Logo = styled(NavLink)`
    justify-self: flex-start;

    text-decoration: none;

    color: #2046F5;
    background-color: inherit;

    padding: 0.3rem;

`
export const LinkContainer=styled.div`
    /* background-color: white; */
    width: 50%;
    background-color: inherit;
    display: flex;
    justify-content: space-around;
`


export const Link = styled(NavLink)`
    text-decoration: none;
    padding: 0.3rem;
    &:hover{
        cursor: pointer;
    }


`