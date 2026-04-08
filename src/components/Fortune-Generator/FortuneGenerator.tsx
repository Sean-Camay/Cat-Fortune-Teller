import { useFortune } from '../../hooks/useFortune'

export const FortuneGenerator = () => {
  const { fortune, getFortune, loading, error } = useFortune()

  return (
    <div>
      <h1>Fortune Generator</h1>
      <button onClick={getFortune}>Get Fortune</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <p>{fortune}</p>
    </div>
  )
}
