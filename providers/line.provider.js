import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export const broadcastMessages = async (messages) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`
    }
  }

  return await axios.post(`${process.env.BASE_URL}/message/broadcast`, messages, config)
}