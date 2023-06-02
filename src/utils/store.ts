import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../screens/Home/slice'
import detailsReducer from '../screens/Details/slice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch