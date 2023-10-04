"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017')
    .then(() => console.log('db connected'))
    .catch(() => console.log('db not connected', err))