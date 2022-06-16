const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const bandSchema = new Schema(
    {

    }
);

const Band = model('Band', bandSchema);
module.exports = Band;