import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';



export const Container = styled.div`
    display: flex;
    background-color: #EFEFEF;
    /* background-color: red; */
    width: fit-content;
`


export const Input = styled.input`
    background-color: #EFEFEF;
    padding-left:8px


`


export const CloseBtn = styled(AiOutlineClose)`

    background-color: #EFEFEF;
    height: 100%;
    /* margin-right: 1rem; */

    &:hover{
        cursor: pointer;
    }
`