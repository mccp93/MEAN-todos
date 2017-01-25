const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    completed: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('task', taskSchema);