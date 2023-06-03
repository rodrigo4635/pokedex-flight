import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface HomeState {
  allPokemons: BasicPokemonData[] | null
  pokemons: Pokemon[] | null
  loading: boolean
  page: number
  search: {
    value: string
    results: Pokemon[] | null
  }
  error: string
  sorting: SortingValues
}

const initialState: HomeState = {
  allPokemons: null,
  pokemons: null,
  loading: false,
  page: 0,
  search: {
    value: "",
    results: null
  },
  error: "",
  sorting: "numAsc"
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeValue: {
      reducer(state, action: PayloadAction<{ property: keyof HomeState, value: any}>) {
        const { property, value } = action.payload
        return { ...state, [property]: value }
      },
      prepare(property: keyof HomeState, value: any) {
        return {
          payload: { property, value }
        }
      }
    },
    addPokemons(state, action) {
      state.loading = false
      state.error = ""
      state.page += 1

      if (state.pokemons) {
        state.pokemons.push(...action.payload)
      } else {
        state.pokemons = action.payload
      }
    },
    changeSort(state, action) {
      state.sorting = action.payload.value
      state.page = 0
      state.pokemons = null
      state.allPokemons = action.payload.sortedPokemons
    },
    changeSearchValue(state, action) {
      state.search.value = action.payload.value !== undefined ? action.payload.value : state.search.value
      state.search.results = action.payload.results !== undefined ? action.payload.results : state.search.results
    }
  },
})

export const { changeValue, addPokemons, changeSort, changeSearchValue } = homeSlice.actions

export default homeSlice.reducer