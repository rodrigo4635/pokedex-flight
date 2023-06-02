import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "utils/hooks"
import { loadInitialData, loadMore } from "./actions"
import { Link } from "react-router-dom"
import Appbar from "./components/Appbar"

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { allPokemons, pokemons, loading, page } = useAppSelector(store => store.home)

  useEffect(() => {
    if (!allPokemons) {
      dispatch(loadInitialData())
    }
  }, [allPokemons])

  const handleLoadMore = () => {
    dispatch(loadMore(allPokemons!, page))
  }

  if (!allPokemons || !pokemons) return <h1>Loading home</h1>
  return (
    <div>
      <Appbar/>
      { pokemons.map(el => <div key={ el.name }><Link to={ `/${ el.name }`}>{ el.name }</Link></div>) }
      { pokemons.length < allPokemons.length ? <button onClick={ handleLoadMore } disabled={ loading }>{ loading ? "loading" : "Load more"}</button> : null }
    </div>
  )
}

export default HomeScreen