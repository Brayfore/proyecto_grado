const mongoose = require('mongoose');

const ReadingSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    question: {
        type: String,
    },
    option_1: {
        type: String,
    },
    option_2: {
        type: String,
    },
    option_true: {
        type: String,
    },
    audios: {
        type: Buffer,  // Buffer se utiliza para almacenar datos binarios como audios
    },
});

module.exports = mongoose.model('reading', ReadingSchema, 'Readings')