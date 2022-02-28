import { useContext, createContext, ReactNode } from 'react'
import { IPokemonData } from '../global';
import { useQuery } from '../utils/hooks';
import { LoadPokemonContext } from './index';

interface SearchContextProviderProps {
    children: ReactNode;
}


interface SearchContextData {
    getFiltered: () => false | IPokemonData[]
}


export const SearchContex = createContext({} as SearchContextData);



export const SearchProvider = ({ children }: SearchContextProviderProps) => {
    const { getQuery } = useQuery();
    const { detailedPokemons } = useContext(LoadPokemonContext);

    const type = getQuery('type')?.toLowerCase();
    const search = getQuery('search')?.toLowerCase();;




    const getFiltered = () => {
        var typeFiltered;

        if (!detailedPokemons)
            return false

        if (!type || type === "all" || type === '')
            typeFiltered = detailedPokemons;
        else
            typeFiltered = detailedPokemons.filter((pokemon) => { return pokemon.types.some((item) => (item.type.name === type)) });

        if (!search)
            return typeFiltered;

        const searchFiltered = typeFiltered.filter((pokemon) => (pokemon.name.includes(search) || search.includes(pokemon.name)));


        return searchFiltered.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });


    }


    return (
        <SearchContex.Provider value={{
            getFiltered
        }}>
            {children}
        </SearchContex.Provider>
    )

}
