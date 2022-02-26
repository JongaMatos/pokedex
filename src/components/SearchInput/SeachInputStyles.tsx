import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';
export const Input = styled.input`
    background-color: #EFEFEF;


`

export const CloseBtn = styled(AiOutlineClose)`

    background-color: #EFEFEF;
    height: 100%;
    margin-right: 1rem;

    &:hover{
        cursor: pointer;
    }
`