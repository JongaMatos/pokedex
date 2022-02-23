import React, { useContext } from 'react';
import { ListPokemons } from "../pages";
import { Route, RouteComponentProps } from "react-router-dom"
import { LoadPokemonContext } from '../context';
// import { Loadings } from './components';
import { PikachuLoading } from '../components';

interface IRouteInfo {
    page?: string;
    type?: string
}


export default function PokemonsRoutes() {
    const { detailedPokemons, filterPokemonByType } = useContext(LoadPokemonContext);

    return (<>
        <Route path="/pokemons/" exact render={() => {
            if (detailedPokemons) return <ListPokemons count={detailedPokemons.length} pokemons={detailedPokemons} page={1} />
            return <PikachuLoading />
        }} />

        <Route path="/pokemons/:page" render={(props: RouteComponentProps<IRouteInfo>) => {

            const { page } = props.match.params
            if (page)
                if (detailedPokemons) return <ListPokemons count={detailedPokemons.length} pokemons={detailedPokemons} page={parseInt(page)} />
            return <PikachuLoading />
        }} />
    </>
    )
}
