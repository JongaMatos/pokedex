import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 20rem;

    background-color: ${props => props.color};

    
    border-radius: 10px;
    border-style: solid;
    border-color: #C2A838;
    border-width: 6px;
    
    @media screen and (max-width:663px) {
        
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

    }

`
export const Header=styled.h4`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    font-family: 'Lato', sans-serif;
    color:#EFEFEF;
    font-size: 1.5rem;
    font-weight: 500;

    align-self: center;
    background-color: inherit;

    margin-top: 1.2rem;
    margin-bottom: 1.2rem;

    @media screen and (max-width:663px) {
        font-size: 1.4rem;
        

        margin-top: 0.5rem;
        margin-bottom: 0.2rem;   
     }

`

export const Label = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    font-family: 'Lato', sans-serif;
    color:#EFEFEF;

    background-color: inherit;
    margin-left: 1.1rem;
    margin-bottom: 0.3rem;
`

export const OuterStatusBar = styled.div`
    display: flex;
    justify-content: flex-start;

    height: 1.3rem;
    width: 90%;
    background-color: white;

    border-radius: 8px;
    margin-left: 1rem;
    margin-bottom: 1.1rem;

    @media screen and (max-width:663px) {
        height: 1rem;
        margin-bottom: 0.5rem;

    }

`
interface IInnerStatusBar {
    distance: number;
}

export const InnerStatusBar = styled.div<IInnerStatusBar>`
    height: 100%;
    width:30%;
    width: ${props => props.distance + "%"};
    background-color: #C2A838;

    border-radius: 8px;
`
