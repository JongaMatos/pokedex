import styled from "styled-components";

export const OuterContainer = styled.div`
    background-color: ${(props) => props.color};
    /* margin-left: 1rem; */
    /* margin-top:5rem; */

    max-width: 20rem;
    /* height: 27rem; */

    display: flex;
    justify-content: center;
    


    border-radius: 10px;
    border-style: solid;
    border-width: 6px;
    border-color: #C2A838;

`


export const InnerContainer = styled.div`
    width:80%;
    background-color:inherit;

`
export const TopTextConatiner = styled.div`
    background-color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-top: 1.2rem;
    margin-bottom: 1rem;
    margin-left: 3px;
    margin-right: 3px;
    
    @media screen and (max-width:663px) {
        margin-top: 0.8rem;

        margin-bottom: 0.6rem;
    }

`
export const Name = styled.p`
    background-color: inherit;

    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    color:#EFEFEF;
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;

`

export const Id = styled.p`
    background-color: inherit;

    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    color:#EFEFEF;
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;

`


export const ImageContainer = styled.div`
    /* margin-top: 2rem; */

    padding-left: 5%;
    padding-right: 5%;
    padding-top: 6%;
    padding-bottom: 6%;

    border-radius: 15px;
    border-style: solid;
    border-width: 4px;
    border-color: #C2A838;

    background-color: #EFEFEF;

    @media screen and (max-width:663px) {
        padding: 0;
    }
`

export const TypesContainer = styled.div`

    background-color: #F0F0F0;
    /* height: 19%; */
    border-radius: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;


    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    @media screen and (max-width:663px) {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }


`
export const TypeLabel = styled.p`
    background-color: inherit;

    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    color:#2E2E2E;
    font-family: 'Lato', sans-serif;
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
`

export const TypesInnerContainer = styled.div`
    /* background-color: red; */
    background-color: inherit;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    flex-wrap: wrap;
    margin-bottom: 1rem;

    /* justify-content: space-between; */
`
