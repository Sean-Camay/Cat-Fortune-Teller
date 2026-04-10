import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentFortune } from '../store/fortuneSlice'
import { fortunes } from '../data/fortunes'
import type { AppDispatch, RootState } from '../store'

// import axios from 'axios'

export const useFortune = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const getFortune = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      // const response = await axios.get(
      //   `http://fortunecookieapi.com/v1/fortunes/${randomId}`, // the endpoint is defunct
      // )

      const response = fortunes[Math.floor(Math.random() * fortunes.length)]
      dispatch(setCurrentFortune(response))
    } catch (error) {
      console.error('Error fetching fortune:', error)
      setError('Failed to fetch fortune')
    } finally {
      setLoading(false)
    }
  }, [dispatch])

  const fortune = useSelector(
    (state: RootState) => state.fortune.currentFortune,
  )

  return { fortune, getFortune, loading, error }
}
