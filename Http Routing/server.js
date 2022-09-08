/*

    Http Routing is needed that when we hit a route,then go to corresponding view file

    Steps

    1--> Run command: npm init
    2--> Run command: npm i nodemon
    3--> Add script "start => nodemon server.js" in package.json file
    4--> Run command npm start
    5--> Use Req parameter to handle route


*/
const fs = require('fs');
const http=require('http');
const PORT = "3000";
const hostName = "127.0.0.1";


const server=http.createServer((req,res)=>{


    if(req.url==="/")
    {

        fs.readFile("views/index.html",(error,data)=>{

            res.writeHead(200,{"Content-type": "text/html"});
            res.write(data);
            res.end();

        });
    
    }
    else if(req.url==="/contact")
    {

        fs.readFile("views/contact.html",(error,data)=>{

            res.writeHead(200,{"Content-type": "text/html"});
            res.write(data);
            res.end();

        });
    
    }
    else if(req.url==="/about")
    {

        fs.readFile("views/about.html",(error,data)=>{

            res.writeHead(200,{"Content-type": "text/html"});
            res.write(data);
            res.end();

        });
    
    }

});


server.listen(PORT,hostName,()=>{

    console.log("successfully server is running");

});