import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Fortune {
  text: string
  tone?: 'inspirational' | 'humorous' | 'mysterious' | 'cat-themed'
}

interface FortuneState {
  currentFortune: string
  savedFortunes: Fortune[]
}

const initialState: FortuneState = {
  currentFortune: '',
  savedFortunes: [],
}

const fortuneSlice = createSlice({
  name: 'fortune',
  initialState,
  reducers: {
    saveFortune: (state, action: PayloadAction<Fortune>) => {
      state.savedFortunes.push(action.payload)
    },
    setCurrentFortune: (state, action: PayloadAction<Fortune>) => {
      state.currentFortune = action.payload.text
    },
    createFortune: (state, action: PayloadAction<string>) => {
      state.currentFortune = action.payload
    },
    removeFortune: (state, action: PayloadAction<string>) => {
      state.savedFortunes = state.savedFortunes.filter(
        (fortune) => fortune.text !== action.payload,
      )
    },
    removeAllFortunes: (state) => {
      state.savedFortunes = []
    },
  },
})

export const {
  saveFortune,
  setCurrentFortune,
  createFortune,
  removeFortune,
  removeAllFortunes,
} = fortuneSlice.actions
export default fortuneSlice.reducer
