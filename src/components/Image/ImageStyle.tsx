import styled from "styled-components";


interface ImgProps {
    isLoading: boolean
}

export const Img = styled.img`

    width: 90%;
    padding: 5%;
    display: ${({ isLoading }: ImgProps) => (isLoading ? "none" : "block")};

`
export const Load = styled.div`
    max-width: 100%;
    display: ${({ isLoading }: ImgProps) => (isLoading ? "block" : "none")};

`