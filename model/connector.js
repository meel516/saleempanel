const mongoURI = "mongodb+srv://mdsaleem516:a4dtNSbNPV1KOFHh@cluster0.npkfbjc.mongodb.net/?retryWrites=true&w=majority"

let mongoose = require('mongoose');
const { tallySchema } = require('./user')
const {paneluserSchema}=require('./paneluser')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
collection_connection = mongoose.model('user', tallySchema)
paneluser = mongoose.model('paneluser', paneluserSchema)


exports.connection = collection_connection;
exports.paneldatabase = paneluser;
