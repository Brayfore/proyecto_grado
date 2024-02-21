const mongoose = require('mongoose');

const ListeningSchema = new mongoose.Schema({
    audios: {
        type: Buffer,
    },
    script: {
        type: String,
    },
    classification: {
        type: String,
    },
    category:{
        type: String,
    },
    TypeofQ: {
        type: String,
    },
    right_answer: {
        type: String,
    },
})

module.exports = mongoose.model('listening', ListeningSchema, 'Listening')