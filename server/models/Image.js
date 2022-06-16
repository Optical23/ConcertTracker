const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const imageSchema = new Schema(
    {

    }
);

const Image = model('Image', imageSchema);
module.exports = Image;