import styled from "styled-components/macro";

interface IContainer {
    hide: boolean
}


export const Container = styled.div`

    /* display: flex; */
    display: ${({ hide: isLoading }: IContainer) => (isLoading ? "none" : "flex")};
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

export const ResultHeader = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    font-family: 'Lato', sans-serif;
    color:#EFEFEF;
   
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    justify-content: center;
`