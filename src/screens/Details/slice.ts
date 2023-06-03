import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DetailsState {
  pokemon: Pokemon | null
  additionalData: AdditionalPokemonData | null
  error: string
}

const initialState: DetailsState = {
  pokemon: null,
  additionalData: null,
  error: ""
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    changeValue: {
      reducer(state, action: PayloadAction<{ property: keyof DetailsState, value: any}>) {
        const { property, value } = action.payload;
        return { ...state, [property]: value }
      },
      prepare(property: keyof DetailsState, value: any) {
        return {
          payload: { property, value }
        }
      }
    },
  },
})

export const { changeValue } = detailsSlice.actions

export default detailsSlice.reducer