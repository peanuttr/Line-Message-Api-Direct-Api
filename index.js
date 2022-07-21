import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import broadcastRoutes from './routes/broadcasts.js'
import pushRoute from './routes/push.js'

const app = express()
dotenv.config()

app.use(bodyparser.json({limit: "30mb", extended: true}))
app.use(bodyparser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/broadcast', broadcastRoutes)
app.use('/push', pushRoute)

app.get('/', (req, res) => res.json({ message: 'Hi, Welcome to Broadcast API.' }))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`PORT : ${PORT}`))