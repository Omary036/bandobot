const mongoose = require('mongoose');

const chunkSchema = new mongoose.Schema({
  key: String,
  data: Array,
  thumbnail: Array,
  mapzz: String,
  extension: String,
  url: String,
  url2: String,
  size: String,
  expired: String,
});

const Chunk = mongoose.model('Chunk', chunkSchema);

module.exports = Chunk;
