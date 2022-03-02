import styled from "styled-components";
// import { BadgeImage } from "..";


export const Container = styled.div`
    background-color:${(props) => props.color};

    display: flex;
    align-items: center;

    padding-right: 0.5rem;

    border-radius: 8px;
`
export const BadgeImg = styled.img`
    height: 1.9rem;
    background-color: inherit;
    border-radius: inherit;
`
export const Label = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    color:#EFEFEF;
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;
    background-color: inherit;

    font-weight: 500;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;

`

