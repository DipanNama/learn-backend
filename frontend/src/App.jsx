import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function App() {
  const [jokes, setJokes] = useState([]);
  // let abc = 55;
  // function increaseAbc() {
  //   abc += 1
  //   console.log(abc)
  // }

  // let [loading, setLoading] = useState(true)

  // let [abc, setAbc] = useState(10);
  // function increaseAbc() {
  //   abc += 1
  //   setAbc(abc)
  //   console.log(abc)
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  // })

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
      {/* <p>abc value: {abc}</p> */}
      {/* {
        loading ? 'Loading...' : 'successful'
      }
      <button onClick={increaseAbc}>increase</button> */}
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
