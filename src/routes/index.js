import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializeDB from '../database'
import scriptures from '../api/scriptures/scripture.controller'

const router = express()

// connect to database
initializeDB(database => {
  // internal middleware
  router.use(middleware({ config, database }))
  // api routes
  router.use('/scriptures', scriptures( { config, database }) )

  console.log("trying route")
})


export default router