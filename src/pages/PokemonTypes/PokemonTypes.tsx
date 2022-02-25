import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, ClosedCard } from './PokemonTypesStyle'
import { Image } from '../../components'
import { colorByType, captalize } from '../../utils/stringUtils';
import { PikachuLoading } from '../../components'
// import {} from '../../assets'

export default function PokemonTypes() {
    const push = useHistory().push;
    const Types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']
    const [loadingDelay, setLoadingDelay] = useState(true);

    useEffect(() => {
        const endLoading = setInterval(() => { setLoadingDelay(false) }, 900)

        return () => {
            clearInterval(endLoading)
        }
    }, [])

    return (
        <>
            {loadingDelay && <PikachuLoading />}
            <Container show={!loadingDelay}>

                {Types.map((type, index) => (
                    <ClosedCard
                        key={type}
                        onClick={() => { push(`/pokemons/?type=${type}`) }}
                        style={{ backgroundColor: `${colorByType(type)}` }}
                    >
                        <Image
                            src={require(`../../assets/Badges/${type}.svg`)}
                            alt={type} />
                        {captalize(type)}
                    </ClosedCard>
                ))
                }

            </Container >
        </>
    )
}
