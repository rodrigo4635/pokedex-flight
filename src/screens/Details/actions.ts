import api from "utils/api"
import { AppDispatch } from "utils/store"
import { changeValue } from "./slice"

export const loadPokemon = (name: string) => {
  return (dispatch: AppDispatch) => {
    api.getPokemon(name)
    .then(pokemon => {
      dispatch(changeValue("pokemon", pokemon))
      dispatch(loadAdditionalData(pokemon))
    })
    .catch(error => {
      if (error.code === "404") {
        dispatch(changeValue("pokemon", {}))
        dispatch(changeValue("additionalData", {}))
      } else {
        dispatch(changeValue("error", "Error while loading pokemon: " + error.message))
      }
    })
  }
}

export const loadAdditionalData = (pokemon?: Pokemon) => {
  return (dispatch: AppDispatch) => {
    if (!pokemon) {
      dispatch(changeValue("additionalData", {}))
      return
    }

    api.getAdditionalPokemonData(pokemon.name)
    .then(addData => {
      dispatch(changeValue("additionalData", addData))
    })
    .catch(error => {
      dispatch(changeValue("additionalData", {}))
      dispatch(changeValue("error", "Error while loading additional pokemon data: " + error.message))
    })
  }
}
