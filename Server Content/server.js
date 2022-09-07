/*

    Server has many content. Such as Server Status code,content type, get post request etc

    Server content check --> Inspect --> Network

    Server Status code

    if code = (101-199) => Informative
    if code = (201-299) => Good request
    if code = (301-399) => Redirect
    if code = (401-499) => Client error
    if code = (500-599) => Server error

*/

const http= require('http');

const port=3000;
const hostname="127.0.0.1";

const server=http.createServer((req,res)=>{

    /*

        server response has 2 part

        1. Head => res..writeHead()
        2. Body => res.write()


    */


    res.writeHead(202,{'Content-type':'text/html'});

    res.write('<h1>hello</h1>');
    res.write('<h2>server</h2>');
    res.write('<h3>running</h3>');


});

server.listen(port,hostname,()=>{

    console.log('successfully server is running...');

});