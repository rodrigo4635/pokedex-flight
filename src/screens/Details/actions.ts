import api from "utils/api"
import { AppDispatch } from "utils/store"
import { changeValue } from "./slice"

export const loadPokemon = (name: string) => {
  return (dispatch: AppDispatch) => {
    api.getPokemon(name)
    .then(pokemon => {
      dispatch(changeValue("data", pokemon))
    })
    .catch(error => {
      if (error.code === "404") {
        dispatch(changeValue("data", {}))
      } else {
        dispatch(changeValue("error", "Error while loading pokemon: " + error.message))
      }
    })
  }
}
