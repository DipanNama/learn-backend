import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      })
  })
  return (
    <>
      <h1>
        Learn backend
      </h1>
      <p>JOKES: {jokes.length}</p>
      <div>
        {
          jokes.map((joke, index) => (
            <div key={joke.id}>
              <h1>{joke.title}</h1>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
