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

export const directMessages = async (messages) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`
    },
  }

  console.log(messages);
  // let jsontStr = JSON.stringify(to)
  // console.log(to);
  // let data = {to:"Ubadbc9a396692a5a194fc35ac270b975",...messages}
  // let id = JSON.stringify(to)
  // console.log(id);
  // let data = {
  //   ...to,...messages
  // }

  // console.log(data);

  return await axios.post(`${process.env.BASE_URL}/message/push`, 
    messages
  , config)
}