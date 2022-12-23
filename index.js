require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const printerRouter = require('./routes/printer')
const { mongoConnect } = require('./database/config')

mongoConnect()
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/printer', printerRouter)

app.listen(process.env.APP_PORT, () =>
	console.log(`Running on port ${process.env.APP_PORT}`)
)
