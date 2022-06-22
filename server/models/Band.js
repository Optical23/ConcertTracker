const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const bandSchema = new Schema(
    {
        band_name: {
            type: String,
            require: true
        },
        musician: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Musician'
            }
        ]
    }
);

const Band = model('Band', bandSchema);
module.exports = Band;