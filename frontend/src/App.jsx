import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    axios.get('/api/jokes', { signal: controller.signal })
      .then(response => { if (!controller.signal.aborted) setJokes(response.data) })
      .catch(() => { if (!controller.signal.aborted) setError('Could not load jokes. Start the local backend and retry.') })
    return () => controller.abort()
  }, [])
  return <><h1>Learn backend</h1><p>JOKES: {jokes.length}</p>{error && <p role="alert">{error}</p>}{jokes.map(joke => <div key={joke.id}><h2>{joke.title}</h2></div>)}</>
}
export default App
