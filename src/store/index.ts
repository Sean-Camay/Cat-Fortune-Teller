import { configureStore } from '@reduxjs/toolkit'
import fortuneReducer from './fortuneSlice'

export const store = configureStore({
  reducer: {
    fortune: fortuneReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
