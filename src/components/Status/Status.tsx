import React from 'react';
import { IPokemonData } from '../../global';
import { colorByType } from '../../utils/stringUtils';
import { Container, Header, Label, OuterStatusBar, InnerStatusBar } from './StatusStyles';

interface IPros {
    pokemon: IPokemonData
}

export default function Status({ pokemon }: IPros) {
    return (
        <Container color={colorByType(pokemon.types[0].type.name)}>
            <Header>Status base</Header>

            {pokemon.stats.map((item) => (
                <div key={item.stat.name + item.base_stat} style={{ backgroundColor: "inherit" }}>
                    <Label>{translateStatus(item.stat.name)}</Label>
                    <OuterStatusBar>
                        <InnerStatusBar distance={item.base_stat} />
                    </OuterStatusBar>
                </div>
            ))}

            {/* <OuterStatusBar>
                <InnerStatusBar />
            </OuterStatusBar> */}


        </Container>
    )
}

function translateStatus(name: string) {

    switch (name) {
        case 'hp':
            return 'Vida';

        case 'attack':
            return 'Ataque';

        case 'defense':
            return "Defesa";

        case "special-attack":
            return "Ataque especial";

        case "special-defense":
            return 'Defesa especial';

        case "speed":
            return "Velocidade";

        default:
            return '';
    }

}