interface Pokemon {
  name: string
}

interface BasicPokemon {
  name: string
  url: string
  id: string
}

type SortingValues = "numAsc" | "numDesc" | "nameAsc" | "nameDesc"