import api from "utils/api"
import { AppDispatch } from "utils/store"
import { addPokemons, changeSort, changeValue } from "./slice"

export const loadInitialData = () => {
  return (dispatch: AppDispatch) => {
    api.getAllPokemons()
    .then(allPokemons => {
      dispatch(changeValue("allPokemons", allPokemons))

      return api.getPokemonList(allPokemons, 0)
    })
    .then(pokemons => {
      dispatch(addPokemons(pokemons))
    })
    .catch(error => {
      console.error(error)
      dispatch(changeValue("error", "Error while loading pokemons"))
    })
  }
}

export const loadMore = (allPokemons: BasicPokemon[], page: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(changeValue("loading", true))
    
    api.getPokemonList(allPokemons, page)
    .then(pokemons => {
      dispatch(addPokemons(pokemons))
    })
    .catch(error => {
      console.error(error)
      dispatch(changeValue("error", "Error while loading pokemons"))
      dispatch(changeValue("loading", false))
    })
  }
}

export const changeSorting = (allPokemons: BasicPokemon[], value: SortingValues) => {
  return (dispatch: AppDispatch) => {
    let sortedPokemons = [...allPokemons]

    switch (value) {
      case "nameAsc":
        sortedPokemons.sort((a, b) => a.name.localeCompare(b.name))
        break;
      case "nameDesc":
        sortedPokemons.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "numAsc":
        sortedPokemons.sort((a, b) => parseInt(a.id) - parseInt(b.id))
        break
      case "numDesc":
        sortedPokemons.sort((a, b) => parseInt(b.id) - parseInt(a.id))
        break
      default:
        break;
    }

    dispatch(changeSort({ value, sortedPokemons }))

    api.getPokemonList(sortedPokemons, 0)
    .then(pokemons => {
      dispatch(addPokemons(pokemons))
    })
    .catch(error => {
      console.error(error)
      dispatch(changeValue("error", "Error while loading pokemons"))
    })
  }
}