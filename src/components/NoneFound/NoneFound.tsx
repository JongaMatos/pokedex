import React from 'react'
import { Container, Text, ConfusedPsyduck } from './NoneFoundStyles'

export default function NoneFound() {
    return (
        <Container>
            <Text>Nenhum resultado encontrado</Text>
            <ConfusedPsyduck />
        </Container>
    )
}
