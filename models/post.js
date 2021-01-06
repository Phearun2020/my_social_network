const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    postedAt: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {conllection: 'posts'});

//create models is call post from schema
module.exports = mongoose.model('Post', postSchema);