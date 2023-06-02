import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "utils/hooks"
import { loadInitialData, loadMore } from "./actions"
import Appbar from "./components/Appbar"
import { Button, Loading, PokeCard } from "components"
import { ButtonArea, CardsGrid } from "./styles"

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

  if (!allPokemons) return <Loading/>
  return (
    <div>
      <Appbar/>
      <CardsGrid>
        { pokemons ? pokemons.map(el => <PokeCard { ...el } key={ el.name }/>) : <Loading/> }
      </CardsGrid>
      { pokemons && pokemons.length < allPokemons.length &&
        <ButtonArea>
          <Button label={ loading ? "loading" : "Load more" } onClick={ handleLoadMore } disabled={ loading }/>
        </ButtonArea>
      }
    </div>
  )
}

export default HomeScreen