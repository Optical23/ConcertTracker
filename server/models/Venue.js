const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const venueSchema = new Schema(
    {
        venue_name: {
            type: String,
            require: true
        }
    }
);

const Venue = model('Venue', venueSchema);
module.exports = Venue;