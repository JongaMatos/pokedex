interface IPokemon {
    name: string;
    id: number;
    url: string;
}

interface IPokemonData {
    name: string;
    id: number;
    url: string;
    types: IType[];


}

interface IType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}