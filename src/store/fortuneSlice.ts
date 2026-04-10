import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FortuneState {
  currentFortune: string
  savedFortunes: string[]
}

const initialState: FortuneState = {
  currentFortune: '',
  savedFortunes: [],
}

const fortuneSlice = createSlice({
  name: 'fortune',
  initialState,
  reducers: {
    saveFortune: (state, action: PayloadAction<string>) => {
      state.savedFortunes.push(action.payload)
    },
    setCurrentFortune: (state, action: PayloadAction<string>) => {
      state.currentFortune = action.payload
    },
    removeFortune: (state, action: PayloadAction<string>) => {
      state.savedFortunes = state.savedFortunes.filter(
        (fortune) => fortune !== action.payload,
      )
    },
    removeFortunes: (state) => {
      state.savedFortunes = []
    },
  },
})

export const { saveFortune, setCurrentFortune, removeFortune, removeFortunes } =
  fortuneSlice.actions
export default fortuneSlice.reducer
