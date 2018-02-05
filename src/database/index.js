import mongoose from 'mongoose'
import config from '../config'

export default callback => {
  let database = mongoose.connect(config.mongoUrl, (err) => {
      if(err){
        console.log('DB CONNECTION FAILED: ' + err )
      }
      else{
        console.log('DB CONNECTION SUCCESS: ' + config.mongoUrl)
      }
  })
  callback(database)
}