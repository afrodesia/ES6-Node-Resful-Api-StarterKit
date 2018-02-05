import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ScriptureSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  chapter: { type: Number, required: false },
  verse: { type: Number, required: false },
  engBook: { type:String, required: false},
  engScripture: { type:String, required: false},
  hebrewBook: { type:String, required: false},
  hebrewScripture: { type:String, required: false}
})

module.exports = mongoose.model('Scripture', ScriptureSchema)