import React from 'react'
import { colorByType, translateType } from '../../utils/stringUtils'
import { Container, BadgeImg, Label } from './TypeBadgeStyle'
// import { BadgeImage } from '..'


interface IProps {
    type: string
}

export default function TypeBadge({ type }: IProps) {
    var img;
    try {

        img = require(`../../assets/Badges/${type}.svg`)
    } catch (error) {
        img = ''
    }


    return (
        <Container color={colorByType(type)}>
            <BadgeImg src={img} alt={type} />
            <Label>
                {translateType(type)}
            </Label>
        </Container>
    )
}
