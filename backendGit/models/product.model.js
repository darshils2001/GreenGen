const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product = new Schema({
    name: {
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    company: {
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },

    image: {
        data: Buffer, 
        contentType: String    
    },

    url: {
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    }
},
    {
    timestamps: true,
    }
);