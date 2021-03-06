import {RouteComponentProps} from 'react-router-dom';

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


}

interface IType {
    slot: Number;
    type: {
        name: string;
        url: string;
    };
}

interface RouteInfo {
    page?: string;
}



