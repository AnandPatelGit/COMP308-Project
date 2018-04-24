const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    bodytemperature : {
        type: String,
        trim: true
    },
    heartrate: {
        type: String,
        trim: true
    },
    bloodpressure: {
        type: String,
        trim: true
    },
    respirationrate: {
        type: String,
        trim: true
    },
    weight: {
        type: String,
        trim: true
    },
    dailytips: {
        type: String,
        trim: true
    }
});
mongoose.model('Article', ArticleSchema);
