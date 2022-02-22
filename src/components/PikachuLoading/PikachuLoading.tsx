import React from 'react'
import { Container, Img } from './PikachuLoadingStyles'
import PikachuGif from '../../assets/running-pikachu.gif'

export default function PikachuLoading() {
    return (
        <Container>
            <Img src={PikachuGif} alt='loading' />
            <Img src={PikachuGif} alt='loading' />
            <Img src={PikachuGif} alt='loading' />
        </Container>
    )
}
