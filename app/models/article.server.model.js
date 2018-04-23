const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        unique: true,
        required: 'Course Code cannot be blank'
    },
    content: {
        type: String, default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    section: {
        type: String,
        trim: true
    }, 
    semester: {
        type: String,
        trim: true
    }
});
mongoose.model('Article', ArticleSchema);
