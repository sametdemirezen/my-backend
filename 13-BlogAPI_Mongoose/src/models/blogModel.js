"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require('mongoose')

/* const nameSchema = new  mongoose.Schema({
    //_id: AUTO CREATED
    //fieldName: String //short usage
    fieldName :{
        type: String,
        default: null,
        trim: true,
        select: true,
        index: false,
        unique: false,
        required: [true, 'Error-Message'],
        enum:[[0,1,2,3], 'Error-Message'],
        validate: [function(data) {return true}, 'Error-Message'],
        get: function(data) {return true},
        set: function(data) {return true},

    }
}, {
    collection: 'collectionName',
    timestamps: true,

}) */

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: String,
        trim: true,
        required: true,
    },
    published:{
        type: Boolean,
        default: true
    }

},{
    collection: 'blogPosts', timestamps: true
})

/* const BlogPostModel = mongoose.model('BlogPost', blogPostSchema) */
module.exports = {
    /* blogCategory: */
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
}