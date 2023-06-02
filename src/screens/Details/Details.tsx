import { useEffect } from "react"
import { useParams } from "react-router-dom"
import api from 'utils/api'
import { useAppDispatch, useAppSelector } from "utils/hooks"
import { changeValue } from "./slice"
import { loadPokemon } from "./actions"

const DetailsScreen = () => {
  const dispatch = useAppDispatch()
  const name = useParams().name
  const pokemons = useAppSelector(state => state.home.pokemons)
  const { data, error } = useAppSelector(state => state.details)

  useEffect(() => {
    if (pokemons) {
      const pokemon = pokemons.find(el => el.name === name)
      dispatch(changeValue("data", pokemon || {}))
    } else {
      dispatch(loadPokemon(name!))
    }
  }, [])

  if (!data) return <h1>loading</h1>
  if (!data.name) return <h1>invalid pokemon</h1>
  return (
    <main>
      <h1>DetailsScreen</h1>
      <h2>Name: { data.name }</h2>
    </main>
  )
}

export default DetailsScreen