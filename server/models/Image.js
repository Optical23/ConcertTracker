const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const imageSchema = new Schema(
    {
        photo: {
            type: String,
            required: true
        },
        event: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Event'
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        venue: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Venue'
        }
    }
);

const Image = model('Image', imageSchema);
module.exports = Image;