import React, { useContext, useEffect, useState } from 'react'
import { Container, ClosedCard } from './PokemonTypesStyle'
import { Image } from '../../components'
import { LoadPokemonContext } from '../../context'
import { usePush, colorByType, captalize } from '../../utils'
import { Loadings } from '../../components'
import Pikachu from '../../assets/running-pikachu.gif'

export default function PokemonTypes() {
    const push = usePush();
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
        {loadingDelay && <Loadings.OnePikachuLoading/>}
            <Container show={!loadingDelay}>

                {Types.map((type, index) => (
                    <ClosedCard
                        key={type}
                        onClick={() => { push(`/type/${type}/`) }}
                        style={{ backgroundColor: `${colorByType(type)}` }}
                    >
                        <Image
                            src={`/Badges/${type}.svg`}

                            fallback={<Loadings.OnePikachuLoading />}
                            // onLoad={<img src={Pikachu} alt="loading"/>}
                            alt={type} />
                        {captalize(type)}
                    </ClosedCard>
                ))
                }

            </Container >
        </>
    )
}
