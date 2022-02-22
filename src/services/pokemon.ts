import api from './api';



async function getPokemons() {
    try {
        const response = await api.get('pokemon/?offset=0&limit=151');
        return response.data.results;

    } catch (error) {
        return false;
    }
}

async function getPokemonsPagination(page: number = 1, limit: number = 151) {
    try {
        const response = await api.get(`pokemon/?offset=${(page - 1) * limit}&limit=${limit}`);
        return { results: response.data.results, max: response.data.count };

    } catch (error) {
        return false;
    }
}




async function getPokemonById(index: Number) {
    try {
        const result = await api.get('pokemon/' + index);
        return result.data;

    } catch (error) {
        return false;
    }
}

async function getPokemonByName(name: string) {
    try {
        const result = await api.get('pokemon/' + name);
        return result.data;

    } catch (error) {
        return false;
    }
}

export { getPokemonById, getPokemonByName, getPokemons, getPokemonsPagination };