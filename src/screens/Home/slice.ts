import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface HomeState {
  allPokemons: BasicPokemon[] | null
  pokemons: Pokemon[] | null
  loading: boolean
  page: number
  search: string
  error: string
  sorting: {
    open: boolean
    value: SortingValues
  }
}

const initialState: HomeState = {
  allPokemons: null,
  pokemons: null,
  loading: false,
  page: 0,
  search: '',
  error: '',
  sorting: {
    open: false,
    value: "numAsc"
  }
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeValue: {
      reducer(state, action: PayloadAction<{ property: keyof HomeState, value: any}>) {
        const { property, value } = action.payload;
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
      if (action.payload) {
        state.sorting.open = false
        state.sorting.value = action.payload.value
        state.page = 0
        state.pokemons = null
        state.allPokemons = action.payload.sortedPokemons
      } else {
        state.sorting.open = !state.sorting.open
      }
    }
  },
})

export const { changeValue, addPokemons, changeSort } = homeSlice.actions

export default homeSlice.reducer