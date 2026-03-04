import express from 'express'
import { jokes } from './data.js'
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.get('/api/jokes', (req, res) => {
    res.status(200).send(jokes)
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})