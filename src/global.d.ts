import { RouteComponentProps } from 'react-router-dom';

interface IPokemon {
    name: string;
    id: Number;
    url: string;
}

interface IPokemonData {
    name: string;
    id: Number;
    url: string;
    types: IType[];
    stats: IStat[];


}

interface IType {
    slot: Number;
    type: {
        name: string;
        url: string;
    };
}


interface IStat {
    base_stat: number;
    stat: {
        name: string
    }
}






