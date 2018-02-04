import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializeDB from '../database'


const router = express()

// connect to database
initializeDB(database => {
  // internal middleware
  router.use(middleware({ config, database }))
  // api routes
})


export default router