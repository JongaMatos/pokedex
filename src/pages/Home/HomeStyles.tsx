import styled from "styled-components/macro";

interface IContainer {
    isLoading: boolean
}


export const Container = styled.div`

    /* display: flex; */
    display: ${({ isLoading }: IContainer) => (isLoading ? "none" : "flex")};
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