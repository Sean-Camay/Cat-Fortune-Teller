import { useSelector } from 'react-redux'
import { useFortune } from '../../hooks/useFortune'
import { RootState } from '../../store'
import { Button } from '@mui/material'

interface FortuneGeneratorProps {
  name?: string
}

export const FortuneGenerator = ({ name = 'Guest' }: FortuneGeneratorProps) => {
  const { getFortune, loading, error } = useFortune()

  const currentFortune = useSelector(
    (state: RootState) => state.fortune.currentFortune,
  )

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <h1>Fortune Generator {name}</h1>
      <Button
        onClick={getFortune}
        size='large'
        sx={{ color: 'white', padding: '2em' }}
      >
        {currentFortune ? 'Get Another Fortune' : 'Get Fortune'}
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <p className='text-2xl font-bold mt-3'>{currentFortune}</p>
    </div>
  )
}
