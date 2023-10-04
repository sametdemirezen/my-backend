"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
module.exports = (error, req, res, next) =>{

    const errorStatusCode = res.errorStatusCode ?? 500
    res.status(errorStatusCode).send({
        error: true,
        message: error.message,
        cause: error.cause,
        body: req.body
    })
}