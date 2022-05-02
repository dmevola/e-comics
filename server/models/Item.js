const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const itemSchema = new Schema({
    itemText: {
        type: String,
        required: "You cant leave the item empty!",
        minlength: 1
    },
    itemImage: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    // add image stuff when package is figured out
    reactions: [reactionSchema]
}, {
    toJson: {
        getters: true
    }
});

itemSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;