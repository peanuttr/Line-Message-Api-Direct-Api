import express from 'express'
import { createBroadcast } from '../controllers/broadcasts.js'

const route = express.Router()

route.post('/', createBroadcast)

export default route