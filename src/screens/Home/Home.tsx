import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "utils/hooks"
import { loadInitialData, loadMore } from "./actions"
import Appbar from "./components/Appbar"
import { Button, Loading, PokeCard, ErrorBar } from "components"
import { ButtonArea, CardsGrid } from "./styles"
import { changeValue } from "./slice"

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { allPokemons, pokemons, loading, page, error } = useAppSelector(store => store.home)

  useEffect(() => {
    if (!allPokemons) {
      dispatch(loadInitialData())
    }
  }, [allPokemons])

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
        { pokemons ?
          pokemons.map(el => <PokeCard { ...el } key={ el.name }/>) :
          <Loading/>
        }
      </CardsGrid>
      { pokemons && pokemons.length < allPokemons.length &&
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