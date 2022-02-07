import { broadcastMessages } from '../providers/line.provider.js'

export const createBroadcast = async (req, res) => {
  try {
    const mapped = req.body.messages.map((message) => ({
      type: 'text',
      text: message
    }))
  
    await broadcastMessages({
      messages: mapped
    })
  
    return res.status(201).json({
      status: 201,
      message: 'OK'
    })
  } catch (error) {
    console.error(error.response.data.message)
    return res.status(error.response.status).json({
      status: error.response.status,
      message: error.response.data.message
    })
  }
}