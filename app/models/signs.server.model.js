//body temperature, heart rate, blood pressure, or respiratory rate
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const SignSchema = new Schema({
    bodytemperature : String,
    heartrate: Number,
    bloodpressure: Number,
    respirationrate: Number,
    weight: Number,
    dailytips: {
        type: String,
        default:''
    },
    user:{
        type: Schema.ObjectId,
        ref: 'User'
    }
});
// Create the 'Signs' model out of the 'SignSchema'
mongoose.model('Sign', SignSchema);