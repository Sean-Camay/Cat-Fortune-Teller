import { useCallback, useState } from 'react'

import axios from 'axios'

export const useFortune = () => {
  const [fortune, setFortune] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const getFortune = useCallback(async () => {
    setLoading(true)
    setError('')

    const randomId = Math.floor(Math.random() * 100) + 1
    try {
      const response = await axios.get(
        `http://fortunecookieapi.com/v1/fortunes/${randomId}`,
      )
      setFortune(response.data.message)
    } catch (error) {
      console.error('Error fetching fortune:', error)
      setError('Failed to fetch fortune')
    } finally {
      setLoading(false)
    }
  }, [])

  return { fortune, getFortune, loading, error }
}
