const mongoose = require('mongoose');


const apartSchema = new mongoose.Schema({
  title: {
   type:String,
   required:true
  },
  discription: {
    type:String,

  },
  price:{
    type:Number,
    required:true
  },
 location:{
  type:String,
  required:true
 },
 image:{
 type:String
 }

});




const Apart = mongoose.model('apart', apartSchema);

module.exports = Apart;