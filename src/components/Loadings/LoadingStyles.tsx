import styled from "styled-components";
import { Oval } from 'react-loader-spinner'



export const Spinner = styled(Oval)`
    background-color: inherit;
    color: inherit;

`

export const PikachuLoading = styled.img`

    background-color: transparent;
    /* max-width: 35%; */
    max-height: 100%;

`

interface ISpinningPokeball {
    backGroundColor: string
}

export const SpinningPokeball = styled.img<ISpinningPokeball>`
    width: 35%;
    padding: 32.5%;
    background-color: transparent;
    animation: rotation 0.5s infinite linear;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
            }
        to {
            transform: rotate(359deg);
            }
}

`