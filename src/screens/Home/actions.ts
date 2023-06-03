import api from "utils/api"
import { AppDispatch } from "utils/store"
import { addPokemons, changeSearchValue, changeSort, changeValue } from "./slice"

export const loadInitialData = () => {
  return (dispatch: AppDispatch) => {
    api.getAllPokemons()
    .then(allPokemons => {
      dispatch(changeValue("allPokemons", allPokemons))

      return api.getPokemonBatch(allPokemons, 0)
    })
    .then(pokemons => {
      dispatch(addPokemons(pokemons))
    })
    .catch(error => {
      console.error(error)
      dispatch(changeValue("error", "Error on load pokemons"))
    })
  }
}

export const loadMore = (allPokemons: BasicPokemonData[], page: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(changeValue("loading", true))
    
    api.getPokemonBatch(allPokemons, page)
    .then(pokemons => {
      dispatch(addPokemons(pokemons))
    })
    .catch(error => {
      console.error(error)
      dispatch(changeValue("error", "Error on load more pokemons"))
      dispatch(changeValue("loading", false))
    })
  }
}

export const changeSorting = (allPokemons: BasicPokemonData[], value: SortingValues) => {
  return (dispatch: AppDispatch) => {
    let sortedPokemons = [...allPokemons]

    switch (value) {
      case "nameAsc":
        sortedPokemons.sort((a, b) => a.name.localeCompare(b.name))
        break
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
        break
    }

    dispatch(changeSort({ value, sortedPokemons }))

    api.getPokemonBatch(sortedPokemons, 0)
    .then(pokemons => {
      dispatch(addPokemons(pokemons))
    })
    .catch(error => {
      console.error(error)
      dispatch(changeValue("error", "Error on load pokemons"))
    })
  }
}

export const search = (value: string, allPokemons: BasicPokemonData[]) => {
  return (dispatch: AppDispatch) => {
   const trim = value.trim().toLowerCase()

   if (trim === "") {
    dispatch(changeSearchValue({ results: null }))
    return
   }

   const filteredPokemons = allPokemons!.filter(el => el.name.includes(trim) || String(el.id).includes(trim))

   api.getPokemonBatch(filteredPokemons, 0)
    .then(pokemons => {
      dispatch(changeSearchValue({ results: pokemons }))
    })
    .catch(error => {
      console.error(error)
      dispatch(changeValue("error", "Error on search pokemons"))
    })
  }
}