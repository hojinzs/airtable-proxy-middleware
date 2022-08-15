import 'dotenv/config'
import express from "express"
import {createAirtableProxy} from "../src/airtableProxy";
import { getPort } from 'get-port-please';

if(typeof process.env.AIRTABLE_API_KEY === 'undefined') {
    throw "SERVER ERROR : define environment AIRTABLE_API_KEY first"
}

getPort({ port: 3000 , portRange: [3000, 3100]}).then((port) => {

    const server = express()

    server.use('/api', createAirtableProxy({
        apiKey: process.env.AIRTABLE_API_KEY as string,
        path: 'api'
    }))

    server.listen(3000, () => {
        console.log(`server is running on http://localhost:${port}`)
    })

})