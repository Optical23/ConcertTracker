const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const musicianSchema = new Schema(
    {
        musician_name: {
            type: String,
            require: true
        },
        band: {
            type: Schema.Types.ObjectId,
            ref: 'Band'
        }

    }
);

const Musician = model('Musician', musicianSchema);

module.exports = Musician;