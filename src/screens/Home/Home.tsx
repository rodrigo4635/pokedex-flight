import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "utils/hooks"
import { loadInitialData, loadMore } from "./actions"
import Appbar from "./components/Appbar"
import { Button, Loading, PokeCard, ErrorBar } from "components"
import { ButtonArea, CardsGrid } from "./styles"
import { changeValue } from "./slice"

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { allPokemons, pokemons, loading, page, error, search } = useAppSelector(store => store.home)
  const listOfPokemons = search.results || pokemons

  useEffect(() => {
    if (!allPokemons) {
      dispatch(loadInitialData())
    }
  }, [allPokemons, dispatch])

  const handleLoadMore = () => {
    dispatch(loadMore(allPokemons!, page))
  }

  const handleCloseError = () => {
    dispatch(changeValue("error", ""))
  }

  if (!allPokemons) return <Loading/>
  return (
    <div>
      <Appbar/>
      <CardsGrid>
        { listOfPokemons ?
          listOfPokemons.map(el => <PokeCard { ...el } key={ el.name }/>) :
          <Loading/>
        }
      </CardsGrid>
      { pokemons && !search.results && pokemons.length < allPokemons.length &&
        <ButtonArea>
          <Button
            label={ loading ? "loading" : "Load more" }
            onClick={ handleLoadMore }
            disabled={ loading }
          />
        </ButtonArea>
      }
      <ErrorBar value={ error } onClose={ handleCloseError }/>
    </div>
  )
}

export default HomeScreen