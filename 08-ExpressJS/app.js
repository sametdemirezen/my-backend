"use strict"
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
*/

/* ExpressJS Start */
const express = require('express'); // Assing expressFramework to express variable.
const app = express() // run application on express.

/* ENV */
require('dotenv').config()
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 8000
/* ------------------------------------------------------- */
/* HTTP_Methods & URLs */

/* app.get('/', (request, response) => {
    //? run response.send for print-out:
    // response.send( 'Welcome to Express' )
    response.send({ message: 'called in "get" method' })
})
app.post('/', (request, response) => response.send({ message: "called in 'post' method."}))
app.put('/', (request, response) => response.send({ message: "called in 'put' method."}))
app.delete('/', (request, response) => response.send({ message: "called in 'delete' method."}))

 */

/* app.route('/')
    .get((req,res) => res.send("get"))
    .post((req,res) => res.send("post"))
    .put((req,res) => res.send("put"))
    .delete((req,res) => res.send("delete")) */

   /*  app.get('/', (req, res) => res.send("in 'root' path"))
    app.get('/path', (req, res) => res.send("in 'path' path"))
    app.get('/abc(x?)123', (req, res) => res.send("in abc(x)123"))
    app.get('/abc*123', (req, res) => res.send("in abc*123"))
    app.get(/xyz/, (req, res) => res.send("in abc(x)123"))
    app.get(/xyz$/, (req, res) => res.send("in abc(x)123"))
    app.get(/^xyz/, (req, res) => res.send("in abc(x)123")) --- bu eksik*/


    app.get('/user/:userId/config/:configParam/*', (req,res) =>{
        res.send({
            url: {
                userId: req.params.userId,
                configParam: req.params.configParam,
                protocol: req.protocol,
                subdomains: req.subdomains,
                hostname: req.hostname,
                baseUrl: req.baseUrl,
                params: req.params,
                query: req.query,
                path: req.path,
                originalUrls: req.originalUrl
            }
        })
    })

   //? '\d' means only-digit-chars in regexp:
// app.get('/user/:userId([0-9]+)', (req, res) => {
app.get('/user/:userId(\\d+)', (req, res) => {
    res.send({
        params: req.params
    })
})



/* ------------------------------------------------------- */



// app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`))
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`))