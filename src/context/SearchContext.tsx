import { useContext, createContext, ReactNode, useEffect } from 'react'
import { LoadPokemonContext } from './index';

interface SearchContextProviderProps {
    children: ReactNode;
}


interface SearchContextData {
}


export const SearchContex = createContext({} as SearchContextData);



export const SearchProvider = ({ children }: SearchContextProviderProps) => {

    const { detailedPokemons } = useContext(LoadPokemonContext);

    useEffect(() => {
        console.log({ Pokemons: detailedPokemons });
    }, [detailedPokemons])


    return (
        <SearchContex.Provider value={{}}>
            {children}
        </SearchContex.Provider>
    )

}
