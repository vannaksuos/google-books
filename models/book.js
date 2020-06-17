const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  authors: {
    type: [String],
    trim: true,
    required: "String is Required"
  },

  description: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  image: {
    type: String,
    trim: true,
    required: "String is Required"

  },

  links:{
    type: String,
    trim: true,
    required: "String is Required"
  },
  
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;