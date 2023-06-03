import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "utils/hooks"
import { changeValue } from "./slice"
import { loadAdditionalData, loadPokemon } from "./actions"
import { Loading, ChipList } from "components"
import { PokemonImg, SmallCardsList, Subtitle, Wrapper, Title } from "./styles"
import SmallCard from "./components/SmallCard"
import { formatter } from "utils"
import Story from "./components/Story"
import Stats from "./components/Stats"

const getGenera = (genera: PokemonGenera[]) => genera.find(el => el.language.name === "en")?.genus.split(" ")[0] || "Unknowm"

const DetailsScreen = () => {
  const dispatch = useAppDispatch()
  const paramName = useParams().name
  const pokemons = useAppSelector(state => state.home.pokemons)
  const { pokemon, additionalData } = useAppSelector(state => state.details)

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
  }, [])

  if (!pokemon || !additionalData) return <Loading />
  if (!pokemon.name) return <h1>invalid pokemon</h1>

  const { abilities, name, id, types, sprites, height, weight, base_experience, stats } = pokemon
  const { genera, growth_rate, habitat, capture_rate, flavor_text_entries } = additionalData

  return (
    <Wrapper>
      <Link className="go-back" to="/">Pokédex</Link>
      <div className="content">
        <div>
          <Title>
            <h1>{formatter.idToName(name)}</h1>
            <h3>#{id}</h3>
          </Title>
          <ChipList list={formatter.typesToLabelColor(types)} />
          <PokemonImg>
            <img src={sprites.other.dream_world.front_default} alt={name} />
          </PokemonImg>
          <Story entries={flavor_text_entries} />
        </div>
        <div>
          <Subtitle>Infos</Subtitle>
          <SmallCardsList>
            <SmallCard label="Height" value={`${height / 10} m`} />
            <SmallCard label="Category" value={getGenera(genera)} />
            <SmallCard label="Weight" value={`${weight / 10} kg`} />
            <SmallCard label="Base Ep." value={base_experience} />
            <SmallCard label="Growth R." value={formatter.idToName(growth_rate.name)} />
            <SmallCard label="Habitat" value={formatter.idToName(habitat.name)} />
            <SmallCard label="Catch R." value={capture_rate} />
          </SmallCardsList>
          <Subtitle>Abilities</Subtitle>
          <ChipList list={abilities.map(el => ({ label: el.ability.name }))} />
          <Stats stats={stats} />
        </div>
      </div>
    </Wrapper>
  )
}

export default DetailsScreen