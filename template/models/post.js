var mongoose = require('mongoose');

var schema = mongoose.Schema({
  Title: String,
  body: String,
  author: number
});

var Post = mongoose.model('posts', schema);

module.exports = Post;