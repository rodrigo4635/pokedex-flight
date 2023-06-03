interface NameAndUrl {
  name: string
  url: string
}

interface PokemonStat {
  base_stat: number
  effort: number
  stat: NameAndUrl
}

interface Pokemon {
  abilities: {
    ability: NameAndUrl
    is_hidden: boolean
  }[]
  base_experience: number
  forms: any[]
  game_indices: any[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  past_types: any[]
  species: NameAndUrl
  sprites: {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
    other: {
      [key: string]: {
        front_default: string
        front_female: string | null
      }
    }
    versions: any
  }
  stats: PokemonStat[]
  types: PokemonTypes[]
  weight: number
}

interface BasicPokemon {
  name: string
  url: string
  id: string
}

interface PokemonGenera {
  genus: string
  language: NameAndUrl
}

interface PokemonFlavourText {
  flavor_text: string
  language: NameAndUrl
  version: NameAndUrl
}

interface PokemonTypes {
  slot: number;
  type: NameAndUrl;
}

interface AdditionalPokemonData {
  base_happiness: number
  capture_rate: number
  color: NameAndUrl
  egg_groups: NameAndUrl[]
  flavor_text_entries: PokemonFlavourText[]
  genera: PokemonGenera[]
  generation: NameAndUrl
  growth_rate: NameAndUrl
  habitat: NameAndUrl
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
}



type SortingValues = "numAsc" | "numDesc" | "nameAsc" | "nameDesc"