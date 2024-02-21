const mongoose = require('mongoose');
/*imagen: optional 
instructions: Fill in the gap with the correct word. Select one of the given options. 
Question: The __________________is a crucial component within the electron tube, responsible for emitting electrons in the process of electron emission.
fill-in: campo para escribir (guarda la respuesta del usuario) se deja vacío 
Option 1: cat 
Option 2: cathode 
Option 3: cathodes 
right_answer:  option 2 
Classification: general concepts 
Category: 1*/


const WritingSchema = new mongoose.Schema({
    instructions: {
        type: String,
    },
    question: {
        type: String,
    },
    fill_in: {
        type: String,
    },
    option_1: {
        type: String,
    },
    option_2: {
        type: String,
    },
    option_3: {
        type: String,
    },
    right_answer: {
        type: String,
    },
    classification: {
        type: String
    }
});

module.exports = mongoose.model('writing', WritingSchema, 'Writings')