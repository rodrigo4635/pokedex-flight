import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "utils/hooks"
import { changeValue } from "./slice"
import { loadAdditionalData, loadPokemon } from "./actions"
import { Loading, ChipList, ErrorBar } from "components"
import { PokemonImg, SmallCardsList, Subtitle, Wrapper, TitleWrapper } from "./styles"
import { formatter } from "utils"
import { Stats, Story, SmallCard, InvalidPokemon } from "./components"

const getGenera = (genera: PokemonGenera[]) => genera.find(el => el.language.name === "en")?.genus.split(" ")[0] || "Unknowm"

const DetailsScreen = () => {
  const dispatch = useAppDispatch()
  const paramName = useParams().name
  const pokemons = useAppSelector(state => state.home.pokemons)
  const { pokemon, additionalData, error } = useAppSelector(state => state.details)

  useEffect(() => {
    if (pokemons) {
      const foundPokemon = pokemons.find(el => el.name === paramName)
      dispatch(changeValue("pokemon", foundPokemon || {}))
      dispatch(loadAdditionalData(foundPokemon))
    } else {
      dispatch(loadPokemon(paramName!))
    }

    return () => {
      dispatch(changeValue("pokemon", null))
      dispatch(changeValue("additionalData", null))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  const handleCloseError = () => {
    dispatch(changeValue("error", ""))
  }

  if (!pokemon || !additionalData) return <Loading />
  if (!pokemon.name) return <InvalidPokemon/>

  const { abilities, name, id, types, sprites, height, weight, base_experience, stats } = pokemon
  const { genera, growth_rate, habitat, capture_rate, flavor_text_entries } = additionalData
  const formattedAbilities = abilities.map(el => ({ label: el.ability.name }))

  return (
    <Wrapper>
      <Link
        className="go-back"
        to="/"
      >
        Pokédex
      </Link>
      <div className="content">
        <div>
          <TitleWrapper>
            <h1>{ formatter.idToName(name) }</h1>
            <h3>#{ id }</h3>
          </TitleWrapper>
          <ChipList list={ formatter.typesToLabelColor(types) } />
          <PokemonImg>
            <img src={ sprites.other.dream_world.front_default } alt={ name } />
          </PokemonImg>
          <Story entries={ flavor_text_entries } />
        </div>
        <div>
          <Subtitle>Infos</Subtitle>
          <SmallCardsList>
            <SmallCard label="Height" value={ `${ height / 10 } m` } />
            <SmallCard label="Category" value={ getGenera(genera) } />
            <SmallCard label="Weight" value={ `${ weight / 10 } kg` } />
            <SmallCard label="Base Ep." value={ base_experience } />
            <SmallCard label="Growth R." value={ formatter.idToName(growth_rate.name) } />
            <SmallCard label="Habitat" value={ formatter.idToName(habitat.name) } />
            <SmallCard label="Catch R." value={ capture_rate } />
          </SmallCardsList>
          <Subtitle>Abilities</Subtitle>
          <ChipList list={ formattedAbilities } />
          <Stats stats={ stats } />
        </div>
      </div>
      <ErrorBar value={ error } onClose={ handleCloseError }/>
    </Wrapper>
  )
}

export default DetailsScreen