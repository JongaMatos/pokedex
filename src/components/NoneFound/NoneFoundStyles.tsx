import styled from "styled-components";
import { ReactComponent as Psyduck,  } from '../../assets/psyduck.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 90%;
    margin: auto;

    /* background-color: red; */
`

export const Text = styled.p`

    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    font-family: 'Lato', sans-serif;
    
    color:#EFEFEF;
    margin:auto;
    margin-bottom: 2rem;
    margin-top: 2rem;



`

export const ConfusedPsyduck = styled(Psyduck)`
    
    height: fit-content;

    margin:auto;
    margin-top: 1rem;

    max-width: 100%;

`