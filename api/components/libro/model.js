const mongoose = require('mongoose');

const modeloLibro = mongoose.Schema({
  author : {type : String},
  price: { type: Number},
  title: { type: String},
  isbn: { type: String},
  genre: { type: String},
  editorial: {type : String},        
  description: {type: String},
  imgUrl: { type: String},
  cloudinary_id: {type: String},
});
    
     
module.exports = mongoose.model('Libro', modeloLibro);