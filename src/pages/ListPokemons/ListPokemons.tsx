import React, { useEffect, useState, useContext } from 'react';
import { Container, ResultHeader } from './ListPokemonsStyles';
import { Card, PikachuLoading, PaginationBar, SearchBar, NoneFound } from '../../components';
import { IPokemonData } from '../../global';
import { useQuery } from '../../utils/hooks';

import { SearchContex } from '../../context';


export default function ListPokemons() {
    const { getFiltered } = useContext(SearchContex);
    const pokemons = getFiltered();
    const { getPage, getQuery, query } = useQuery();
    const search = getQuery('search');
    const perPage = 60;

    const page = getPage();


    useEffect(() => {
        window.scrollTo(0, 0);

        // eslint-disable-next-line
    }, [query])


    return (
        <>
            {/* {isLoading && <PikachuLoading />} */}
            <SearchBar />
            {search && pokemons && pokemons.length !== 0 && <ResultHeader> Mostrando resultados para ' {search} ':</ResultHeader>}
            {pokemons && pokemons.length === 0 && <NoneFound />}
            <Container hide={false}>
                {pokemons && pokemons
                    .filter((pokemon: IPokemonData, index: number) => (index >= (page - 1) * perPage && index < page * perPage))
                    .map(
                        (pokemon: IPokemonData) => (<Card key={pokemon.name} pokemon={pokemon} />)
                    )
                }
            </Container>

            <PaginationBar
                hide={!(pokemons && pokemons.length > perPage)}
                // setIsLoading={}
                currentPage={page}
                count={(pokemons && pokemons.length) || 0}
                maxPerPage={perPage}
            />

        </>
    )
}


// export default function ListPokemons() {
//     const { getFiltered } = useContext(SearchContex);
//     const pokemons = getFiltered();
//     const { getPage, getQuery, query } = useQuery();
//     const search = getQuery('search');
//     const [isLoading, setIsLoading] = useState(false);
//     const perPage = 60;

//     const page = getPage();




//     return (
//         <>
//             {isLoading && <PikachuLoading />}
//             {!isLoading && <SearchBar />}
//             {search && pokemons && pokemons.length !== 0 && <ResultHeader> Mostrando resultados para ' {search} ':</ResultHeader>}
//             {pokemons && pokemons.length === 0 && <NoneFound />}
//             <Container hide={isLoading}>
//                 {pokemons && pokemons
//                     .filter((pokemon: IPokemonData, index: number) => (index >= (page - 1) * perPage && index < page * perPage))
//                     .map(
//                         (pokemon: IPokemonData) => (<Card key={pokemon.name} pokemon={pokemon} />)
//                     )
//                 }
//             </Container>

//             <PaginationBar
//                 hide={isLoading || !(pokemons && pokemons.length > perPage)}
//                 setIsLoading={setIsLoading}
//                 currentPage={page}
//                 count={(pokemons && pokemons.length) || 0}
//                 maxPerPage={perPage}
//             />

//         </>
//     )
// }
