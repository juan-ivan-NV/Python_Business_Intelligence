const {
  Schema,
  model
} = require('mongoose')

const officeSchema = new Schema({

  name: {
    type: String,
    required:true
  },
  category_code: {
    type: String,
    required:true
  },
  totalOffices:Number,
  lat:Number,
  lng:Number,
  principal:{
    type:String,
    default:'Point',
    coordinates: [Number]
  }


}, {
  timestamps: false,
  versionKey: false
})

module.exports = model('Office', officeSchema)