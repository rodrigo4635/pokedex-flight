const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const api = async <T>(endpoint: string, customConfig: RequestInit = {}): Promise<T> => {
  const headers = { 'Content-Type': 'application/json' }

  const config: RequestInit = {
    method: 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  try {
    const response = await window.fetch(endpoint, config)
    
    if (!response.ok) {
      throw { code: String(response.status), message: response.statusText }
    }

    const data = await response.json() as T

    return data
  } catch (err: any) {
    throw err
  }
}

api.getAllPokemons = async (limit = 151): Promise<BasicPokemon[]> => {
  const allPokemons = await api<{ results: BasicPokemon[] }>(`${ POKEMON_BASE_URL }?limit=${ limit }`);
  return allPokemons.results.map(pokemon => ({
    ...pokemon,
    id: pokemon.url.split("/").slice(-2)[0]
  }))
}

api.getPokemonList = async (allPokemons: BasicPokemon[], page = 0, limit = 30): Promise<Pokemon[]> => {
  const promises = allPokemons.slice(page * limit, (page + 1) * limit).map(async basicPokemon => {
    const result = await fetch(basicPokemon.url);
    const res = await result.json() as Pokemon;
    return res;
  });

  const results = await Promise.all(promises);
  return results
}

api.getPokemon = async (idOrName: string | number) => {
  const pokemon = await api<Pokemon>(`${ POKEMON_BASE_URL }/${ idOrName }`)
  return pokemon
}

api.searchPokemon = async (value: string) => {
  return []
}

export default api