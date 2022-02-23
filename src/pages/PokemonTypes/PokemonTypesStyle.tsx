import styled from "styled-components";

interface ICard {

}



interface IContainer {
    show: boolean;
}

export const Container = styled.div<IContainer>`
    display:${({ show }: IContainer) => show ? 'flex' : 'none'};
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* margin-bottom: 4%; */
`



export const ClosedCard = styled.div <ICard>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

    width: 12rem;
    margin:5rem;
    
    padding-bottom: 1rem;


    color: #FEFEFE;
    font-size: 2rem;

    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width:1055px){
        width: 20%;
        margin:5%;
    }
    @media screen and (max-width:880px){
        font-size: 1.5rem;
        margin:5%;
    }
    @media screen and (max-width:540px){
        font-size: 1rem;
    }

`
export const Image = styled.img`
    width:100%;
    background-color: inherit;


`
