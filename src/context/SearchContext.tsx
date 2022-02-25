import { useContext, createContext, ReactNode, useEffect } from 'react'
import { IPokemonData } from '../global';
import { useQuery } from '../utils/hooks';
import { LoadPokemonContext } from './index';

interface SearchContextProviderProps {
    children: ReactNode;
}


interface SearchContextData {
    getFiltered: ()=> false | IPokemonData[]
}


export const SearchContex = createContext({} as SearchContextData);



export const SearchProvider = ({ children }: SearchContextProviderProps) => {
    const { getQuery } = useQuery();
    const { detailedPokemons } = useContext(LoadPokemonContext);

    const type = getQuery('type');



    useEffect(() => {
    }, [type])

    const getFiltered = () => {
        if (!detailedPokemons)
            return false
        if (!type)
            return detailedPokemons;

        const filteredPokemons = detailedPokemons.filter((pokemon) => {
            return pokemon.types.some((item) => (item.type.name === type))
        })

        if (filteredPokemons.length > 0)
            return filteredPokemons;

        return detailedPokemons;
    }


    return (
        <SearchContex.Provider value={{
            getFiltered
        }}>
            {children}
        </SearchContex.Provider>
    )

}
