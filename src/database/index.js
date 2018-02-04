import mongoose from 'mongoose'
import config from '../config'

export default callback => {
  const database = mongoose.connect(config.mongoUrl)
  callback(database)
}