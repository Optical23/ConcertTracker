const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const opts = {toJson: {virtuals: true}};

const userSchema = new Schema(
    {
        full_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'NOT A VALID EMAIL ADDRESS']
        },
        password: {
            type: String,
            required: true, 
            minlength: 6
        },
        event: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Event'
            }
        ],
        band: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Band'
            }
        ],

    }, opts
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('event_length').get(function() {
    return this.event.length;
});

const User = model('User', userSchema);
module.exports = User;