import mongoose from 'mongoose'
import { Router } from 'express'
// Scripture Model
import Scripture from './scripture.model'

export default({ config, database }) => {
  let api = Router()

  // '/v1/scripture/add'
  api.post('/add', (req, res) => {
    let newRest = new Scripture()
    newRest.engBook = req.body.engBook

    newRest.save(err => {
      if(err){
        res.send(err)
      }
      res.json({ message: 'English Scripture Book Saved Successfully'})
    })
  })
  return api
  console.log("scripture controller")
}
