/*

    Nodemon is needed for using without close and run server to get response

    Steps

    1--> Run command: npm init
    2--> Run command: npm i nodemon
    3--> Add script "start => nodemon server.js" in package.json file
    4--> Rin command npm start
    5--> check in browser

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