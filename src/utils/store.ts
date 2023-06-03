import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../screens/Home/slice'
import detailsReducer from '../screens/Details/slice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 200 },
    serializableCheck: { warnAfter: 200 },
  })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch