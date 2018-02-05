import express from 'express'
import http from 'http'
import bodyPaser from 'body-parser'
import mongoose from 'mongoose'

// configuration 
import config from './config'
// routes
import routes from './routes'
// database
import database from './database'

// start express application
const app = express()

app.server = http.createServer(app)

// middleware
app.use(bodyPaser.json({
  limit: config.bodyLimit
}))


// passport config


// api routes v1
app.use('/v1', routes)

app.server.listen(config.port)
console.log(`Started on port ${app.server.address().port}`)

export default app