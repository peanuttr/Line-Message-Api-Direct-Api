import express from 'express'
import { createBroadcast } from '../controllers/push.js'

const route = express.Router()

route.post('/', createBroadcast)

export default route