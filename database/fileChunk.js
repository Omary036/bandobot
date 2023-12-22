const mongoose = require('mongoose');

const chunkSchema = new mongoose.Schema({
  key: String,
  data: Buffer,
  mapzz: String,
  extension: String,
  url: String,
  url2: String,
});

const Chunk = mongoose.model('Chunk', chunkSchema);

module.exports = Chunk;
