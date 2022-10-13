// Load environment variables
import * as dotenv from 'dotenv' 
dotenv.config()

import { Avalanche } from "avalanche"

if (!process.env.NODE_URL)     throw "NODE_URL env var is not set!"
if (!process.env.NODE_API_KEY) throw "NODE_API_KEY env var is not set!"
if (!process.env.NETWORK_ID)   throw "NETWORK_ID env var is not set!"
if (!process.env.NETWORK_NAME) throw "NETWORK_NAME env var is not set!"

const url = new URL(process.env.NODE_URL)
const client = new Avalanche(
  url.hostname,
  url.port,
  url.protocol.replace(":", ""),
  parseInt(process.env.NETWORK_ID),
  "X",
  "C",
  process.env.NETWORK_NAME
)

client.setAuthToken(process.env.NODE_API_KEY)

export default client