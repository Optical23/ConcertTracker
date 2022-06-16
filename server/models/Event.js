const {default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
    {
        event_name: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 150
        },
        event_thumbnail: {
            type: String,
            required: true
        },
        venue: {
            type: Schema.Types.ObjectId,
            require: true,
            ref:'Venue'
        },
        band: [
            {
                type: Schema.Types.ObjectId,
                require: true,
                ref:'Band'
            }
        ],
        image: [
            {
                type: Schema.Types.ObjectId,
                require: true,
                ref: 'Image'
            }
        ],
        start_date: {
            type: String,
            require: true
        },
        end_date: {
            type: String,
            require: true
        }
    }
);

const Event = model('Event', eventSchema);
module.exports = Event;