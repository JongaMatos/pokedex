import styled from "styled-components";

interface IPaginationButton {
    isCurrentPage?: boolean;
}
interface IPaginationContainer {
    hide?: boolean;
}

/* background-color: ${(props) => (props.isCurrentPage ? "#2046F5" : "#2046F5")}; */
export const PaginationButton = styled.button<IPaginationButton>`

    background-color: #2046F5;
    color: #EFEFEF;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: large;
    margin-left:1rem ;
    margin-right:1rem ;

    border-radius: 0.2rem;

    &:hover{
        cursor: pointer;
    }

`

export const PaginationContainer = styled.div`

    /* display: flex; */
    display: ${({ hide }: IPaginationContainer) => (hide ? "none" : "flex")};
    margin: auto;

    justify-content: center;

    margin-bottom: 1rem;

    @media (max-width: 810px)
    {
        margin-top:2rem;
        /* width: 15rem; */
   
    }


`