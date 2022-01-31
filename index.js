require('dotenv').config()
require('express-async-errors')
require('./api/database')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./api/routes')
const cors = require('cors')
const errorHandler = require('./api/middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use('/api', routes)
app.use(errorHandler)

app.listen(PORT, function(){
    console.log(`Servidor iniciado na porta ${PORT}...`)
})