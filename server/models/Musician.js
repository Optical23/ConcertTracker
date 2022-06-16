const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const musicianSchema = new Schema(
    {

    }
);

const Musician = model('Musician', musicianSchema);
module.exports = Musician;