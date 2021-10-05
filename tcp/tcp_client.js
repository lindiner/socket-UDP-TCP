import { Socket } from 'net'
const HOST = '127.0.0.1'

const client = new Socket();
client.connect({ port: 59090, host: HOST })

client.on('data', (data) => {
   console.log(data.toString())
})