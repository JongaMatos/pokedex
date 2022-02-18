import styled from "styled-components";

interface IPaginationButton {
    isCurrentPage: boolean;
}
interface IPaginationContainer {
    isLoading?: boolean;
}

export const PaginationButton = styled.button<IPaginationButton>`

    background-color: #2046F5;
    /* background-color: ${(props) => (props.isCurrentPage ? "#2046F5" : "#2046F5")}; */
    color: #EFEFEF;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: large;

    border-radius: 0.2rem;

    &:hover{
        cursor: pointer;
    }

`

export const PaginationContainer = styled.div`

    /* display: flex; */
    display: ${({ isLoading }: IPaginationContainer) => (isLoading ? "none" : "flex")};
    width: 30%;
    margin: auto;

    justify-content: space-around;
    /* background-color: black; */

    margin-bottom: 2rem;
    margin-top: 1rem;

    @media (max-width: 810px)
    {
        margin-top:2rem;
        width: 15rem;
   
    }


`