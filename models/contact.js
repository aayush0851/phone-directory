const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//contact Schema
const contactSchema = new Schema({
    name: {
        type: String,
        require: [true, 'This field is required']
    },
    mobileNumber: {
        type: Number,
        min: 6000000000,
        max: 9999999999,
        require: [true, 'This field is required']
    }
});

//model prepared
const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;