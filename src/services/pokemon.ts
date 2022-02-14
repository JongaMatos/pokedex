import api from './api';



async function getPokemons(){
    try {

        const response = await api.get('pokemon/?offset=0&limit=151');

        return response.data.results;

    } catch (error) {

        return false;
    }
    
}





async function getPokemonById(index:number){

    try {

        const result = await api.get('pokemon/' + index);

        // console.log({result:result.data})
        return result.data;


    } catch (error) {

        return false;
    }

}

export {getPokemonById, getPokemons};