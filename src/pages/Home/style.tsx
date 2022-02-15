import styled from "styled-components/macro";

export const Container = styled.button`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 4%;
    margin-bottom: 4%;
    margin-right: 2%;
    margin-left: 2%;

    @media  (max-width: 716px) {
        justify-content: space-around;

    }


`