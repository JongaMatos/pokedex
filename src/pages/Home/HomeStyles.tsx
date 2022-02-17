import styled from "styled-components/macro";

export const Container = styled.button`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    width: 90%;
   
    margin: auto;
    margin-top: 1rem;

    @media (max-width: 805px)
    {
        width: 99%;
        justify-content: space-between;
        
    }

`