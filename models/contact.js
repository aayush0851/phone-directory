const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//contact Schema
const contactSchema = new Schema({
    name: {
        type: String,
        require: [true, 'This field is required']
    },
    mobileNumber: {
        type: String,
        require: [true, 'This field is required']
    }
});

//model prepared
const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;