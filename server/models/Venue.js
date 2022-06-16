const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const venueSchema = new Schema(
    {

    }
);

const Venue = model('Venue', venueSchema);
module.exports = Venue;