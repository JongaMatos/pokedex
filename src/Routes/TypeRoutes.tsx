import React, { useContext } from 'react';
import { ListPokemons, PokemonTypes } from "../pages";
import { Route, RouteComponentProps } from "react-router-dom"
import { LoadPokemonContext } from '../context';
import { PikachuLoading } from '../components';

interface IRouteInfo {
    page?: string;
    type?: string
}
export default function TypesRoutes() {
    const { detailedPokemons, filterPokemonByType } = useContext(LoadPokemonContext);

    return ( <>

            <Route path="/type" exact render={() => <PokemonTypes />} />

            {/* Lista Por tipo */}

            <Route path="/type/:type" exact render={(props: RouteComponentProps<IRouteInfo>) => {

                const { type } = props.match.params;
                const { filteredPokemon, length } = filterPokemonByType(type || "");

                if (!detailedPokemons)
                    return <PikachuLoading />
                if (!length) return <PokemonTypes />

                return <ListPokemons count={length} pokemons={filteredPokemon} page={1} filter={type} />

            }} />



            <Route path="/type/:type/:page" render={(props: RouteComponentProps<IRouteInfo>) => {

                const { type, page } = props.match.params;
                const { filteredPokemon, length } = filterPokemonByType(type || "");

                if (!detailedPokemons)
                    return <PikachuLoading />
                if (!length) return <PokemonTypes />

                return <ListPokemons count={length} pokemons={filteredPokemon} page={(page && parseInt(page)) || 1} filter={type} />

            }} />
        </>
    )
}
