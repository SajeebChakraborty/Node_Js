/*

    Http Module is needed for create server and communicate with server

*/

const http = require('http');
const port = 3000;
const hostname ='127.0.0.1';

//server create
const server=http.createServer((req,res)=>{

    //server response
    res.end("<h1>Server is running</h1>");

});

//server port hostname define
server.listen(port,hostname, ()=>{

    // server running successfull message
    console.log(`Successfully running at http://${hostname}:${port}`);

});