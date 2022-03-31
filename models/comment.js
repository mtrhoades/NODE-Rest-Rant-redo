// Imports
const mongoose = require('mongoose');

// schema
let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})

// exports
module.exports = mongoose.model('Comment', commentSchema)