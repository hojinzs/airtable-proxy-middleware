import 'dotenv/config'
import express from "express"
import {createAirtableProxy} from "./airtableProxy";

if(typeof process.env.AIRTABLE_API_KEY === 'undefined') {
    throw "SERVER ERROR : define environment AIRTABLE_API_KEY first"
}

const server = express()

server.use('/api', createAirtableProxy({
    apiKey: process.env.AIRTABLE_API_KEY as string,
    path: 'api'
}))

server.listen(3000, () => {
    console.log("server is on http://localhost:3000")
})