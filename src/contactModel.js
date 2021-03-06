let mongoose = require('mongoose');

// Setup schema
let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

let contact = mongoose.model('contact', contactSchema);

contact.get = function (callback, limit)  {
    contact.find(callback).limit(limit);
};

module.exports = contact;
