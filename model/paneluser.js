const { Schema, mongo } = require('mongoose');

const paneluserSchema = new Schema({
    username: Schema.Types.String,
    password: Schema.Types.String,
})

exports.paneluserSchema = paneluserSchema;
