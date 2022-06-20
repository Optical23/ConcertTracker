const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const venueSchema = new Schema(
    {
        venue_name: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        description: {
            type: String
        }
    }
);

const Venue = model('Venue', venueSchema);
module.exports = Venue;