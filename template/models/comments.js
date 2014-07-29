var mongoose = require('mongoose');

var schema = mongoose.Schema({
  body: String,
  author: number,
  postId: mongoose.Schema.Types.ObjectId
});

var Comment = mongoose.model('comments', schema);

module.exports = Comment;