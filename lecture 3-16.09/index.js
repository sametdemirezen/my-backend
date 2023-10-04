"use strict"

const http = require("node:http")

/* const app = http.createServer((request, response) => {
    response.end("welcome to node.js server")
})

//127.0.0.1:8000
app.listen(8000, () => console.log("Server runned: http://127.0.0.1:8000") ) */

/* 

/* ---------------------------------------------------------------------- */

/* const app = http.createServer((req, res) => {

    //console.log( req )
    // console.log( res )
    if (req.url == '/') {

        res.end('<h1>Main Page')

    } else if (req.url == '/second') {

        res.end('<h1>Second Page')

    } else {

        res.end('<h1>Server is running')
    }

}).listen(8000, () => console.log('Server Runned: http://127.0.0.1:8000')) */ 

/* ---------------------------------------------------------------------- */

http.createServer((req, res) =>{

    if  (req == "/"){

        res.statusCode = 404
        res.statusMessage = "not found"

        res.setHeader("Content-Type", "text/html")
        res.setHeader("another header", "header")

        res.write("1")
        res.write("2")
        res.end()
    } else {
        res.end("Server is running")
    }

}).listen(8000, () =>console.log("Server Runned: http://127.0.0.1:8000"))