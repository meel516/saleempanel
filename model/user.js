const { Schema, mongo } = require('mongoose');

const tallySchema = new Schema({
    username: Schema.Types.String,
    key: Schema.Types.String,
    modname: Schema.Types.String,
    expiry: Schema.Types.Number,
    serial:Schema.Types.String
})

exports.tallySchema = tallySchema;
