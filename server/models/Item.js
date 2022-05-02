const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const itemSchema = new Schema({
    itemPublisher: { //****NEED TO MAKE THIS A LOOKUP */ 
        // ie. DC, Marvel, Etc
        type: String,
        required: "You cant leave the publisher empty!",
        minlength: 1
    },
    itemTitle: { //ie Batman, Wolverine, SuperMan vs Batman, etc.
        type: String,
        required: "You cant leave the Title empty!",
        minlength: 1
    },
    itemIssueTitle: {
        type: String,
        required: "You cant leave the Issue Title empty!",
        minlength: 1
    },
    itemIssueNumber: {
        type: String,
        required: "You cant leave the Issue Number empty!",
        minlength: 1
    },
    itemDescription: {
        type: String,
        required: "You cant leave the item description empty!",
        minlength: 1
    },
    itemCondition: { //****NEED A LOOKUP */
        //ie. (Poor, Fair, Good, Very Fine, Mint)
        type: String,
        required: "You cant leave the item condition empty!",
        minlength: 1
    },
    itemPrice: { //****SET TO DECIMAL */
        type: String,
        required: "You cant leave the item empty!",
        minlength: 1
    },
    itemImage: { //Gets set on upload
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: { //***Need to link to user table */
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