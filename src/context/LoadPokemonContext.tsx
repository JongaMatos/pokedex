import { createContext, ReactNode, useEffect, useState } from 'react'
import { IPokemonData } from '../global';
import { getPokemonByName } from '../services/pokemon';
import { useApi } from '../utils';


interface ISType {
    name: string;
}

interface LoadPokemonProviderProps {
    children: ReactNode;
}

interface LoadPokemonData {
    detailedPokemons: false | IPokemonData[];
    loadedTypes: false | string[];
    filterPokemonByType: (filterType: string) => ({ filteredPokemon: IPokemonData[], length: number });

}

export const LoadPokemonContext = createContext({} as LoadPokemonData);

export const LoadPokemonProvider = ({ children }: LoadPokemonProviderProps) => {
    const [allSimple] = useApi("pokemon/?offset=0&limit=100000")
    const [detailedPokemons, setDetailledPokemons] = useState<false | IPokemonData[]>(false);

    useEffect(() => {
        if (allSimple && !detailedPokemons)
            getPokemonsDetails();
        // eslint-disable-next-line
    }, [allSimple])


    const getPokemonsDetails = async () => {
        const results = await Promise.all(allSimple.results.map(async (simplePokemon: IPokemonData) => (await getPokemonByName(simplePokemon.name))));
        setDetailledPokemons(results);
    }


    const filterPokemonByType = (filterType: string) => {
        if (!detailedPokemons)
            return ({ filteredPokemon: [], length: 0 })

        const filteredPokemon: IPokemonData[] = detailedPokemons.filter((pokemon: IPokemonData) => {
            return pokemon.types.some((value) => {
                return value.type.name === filterType;
            })
        })
        const length = filteredPokemon.length;

        return ({ filteredPokemon, length })

    }

    const [allTypes] = useApi("https://pokeapi.co/api/v2/type/?limit=50")
    const [loadedTypes, setLoadedTypes] = useState<false | string[]>(false);

    useEffect(() => {

        if (!loadedTypes && allTypes)
            setLoadedTypes(allTypes.results
                .map((type: ISType) => type.name)
                .filter((type: string) => type !== 'shadow' && type !== 'unknown')
            )

    }, [loadedTypes, allTypes])


    return (
        <LoadPokemonContext.Provider value={{
            detailedPokemons,
            filterPokemonByType,
            loadedTypes,
        }}>
            {children}
        </LoadPokemonContext.Provider>
    )

}