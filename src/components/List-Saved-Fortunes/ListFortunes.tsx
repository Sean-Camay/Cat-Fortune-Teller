import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFortune } from '../../store/fortuneSlice'

export const ListFortunes = () => {
  const dispatch = useDispatch()
  const savedFortunes = useSelector(
    (state: RootState) => state.fortune.savedFortunes,
  )

  const handleRemoveFortune = (fortune: string) => {
    dispatch(removeFortune(fortune))
  }
  return (
    <div>
      <h1>List of Saved Fortunes</h1>
      <ul>
        {savedFortunes.map((fortune: string, index: number) => (
          <li key={index}>
            {fortune}
            <button onClick={() => handleRemoveFortune(fortune)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
