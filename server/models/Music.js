const { Schema, model } = require('mongoose');

const musicSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
    unique: true,
  }
});

const Music = model('Music', musicSchema);

module.exports = Music;
