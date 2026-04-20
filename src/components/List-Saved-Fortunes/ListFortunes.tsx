import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeAllFortunes, removeFortune } from '../../store/fortuneSlice'

import { Button } from '@mui/material'

export const ListFortunes = () => {
  const dispatch = useDispatch()
  const savedFortunes = useSelector(
    (state: RootState) => state.fortune.savedFortunes,
  )

  const handleRemoveFortune = (fortune: string) => {
    dispatch(removeFortune(fortune))
  }

  const handleRemoveAllFortunes = () => {
    dispatch(removeAllFortunes())
  }

  const disabledButton = savedFortunes.length === 0

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <h1 className='m-4'>List of Saved Fortunes</h1>
      <span style={{ cursor: disabledButton ? 'not-allowed' : 'pointer' }}>
        <Button
          variant='contained'
          disabled={disabledButton}
          onClick={handleRemoveAllFortunes}
          sx={{
            pointerEvents: 'none',
            backgroundColor: 'white',
            color: 'black',
            marginBottom: '1em',
          }}
        >
          Remove All Fortunes
        </Button>
      </span>
      <ul>
        {savedFortunes.map((fortune, index) => (
          <li key={index}>
            <span className='text-2xl'>{fortune}</span>
            <Button
              variant='contained'
              size='small'
              onClick={() => handleRemoveFortune(fortune)}
              sx={{
                marginLeft: '1em',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
