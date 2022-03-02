import React from 'react'
import { IPokemonData } from '../../global'
import { captalize, colorByType, showId } from '../../utils/stringUtils';

import { Image, TypeBadge } from '..';
import {
    OuterContainer,
    InnerContainer,
    TopTextConatiner,
    Name, Id,
    ImageContainer,
    TypesContainer,
    TypesInnerContainer,
    TypeLabel
} from './BigPokemonCardStyles';

interface IProps {
    pokemon: IPokemonData
}

export default function BigPokemonCard({ pokemon }: IProps) {
    return (
        <OuterContainer color={colorByType(pokemon.types[0].type.name)}>
            <InnerContainer>
                <TopTextConatiner>
                    <Name>
                        {captalize(pokemon.name)}
                    </Name>
                    <Id>
                        {showId(pokemon.id)}
                    </Id>
                </TopTextConatiner>
                <ImageContainer>

                    <Image
                        src={[
                            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
                        ]}
                    />

                </ImageContainer>
                <TypesContainer>
                    <TypeLabel>
                        Tipos:
                    </TypeLabel>
                    <TypesInnerContainer>

                        {pokemon.types.map((item) => {
                            return <TypeBadge type={item.type.name} key={item.type.name} />
                        })}

                    </TypesInnerContainer>

                </TypesContainer>
            </InnerContainer>
        </OuterContainer>
    )
}
