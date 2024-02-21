const mongoose = require('mongoose');


const VocabularySchema = new mongoose.Schema({
    name_in_spanish: {
        type: String,
    },
    name_in_english: {
        type: String,
    },
    images: {
        type: Buffer,  // Buffer es utilizado para almacenar datos binarios como imágenes
    },
    audios: {
        type: Buffer,
    },
    pronunciation: {
        type: String,
    }
});

module.exports = mongoose.model('vocabulary', VocabularySchema, 'Vocabularys')