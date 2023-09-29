const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const tarefasRoute = require('./routes/tarefasRoute.js')
const bodyParser = require('body-parser')
const db = require('./config/dbConnect.js')
const cors = require('cors')

db.once('open', () => {
    console.log('MongoDB conectado')
})

db.on('error', () => {
    console.log('Erro ao conectar com MongoDB')
})

app.listen(port, () => {
    console.log(`Server ligado http://localhost:${port}`)
})

app.get('/', (req,res) => {
    res.send('My day')
})

app.use(
    cors(),
    express.json(),
    tarefasRoute
)