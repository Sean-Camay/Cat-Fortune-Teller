import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import fortuneReducer from './fortuneSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['savedFortunes'], // only persist the savedFortunes array
}

const persistedReducer = persistReducer(persistConfig, fortuneReducer)

export const store = configureStore({
  reducer: {
    fortune: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable serializable check for redux-persist
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
