/*

    Path module needed for extention of file , get path information , change path etc.


*/

const path = require('path');

console.log(__dirname);

console.log(__filename);

//extention find out
const extentionname = path.extname('index.html');
console.log(extentionname);

//join path
const join=path.join(__dirname + "/../values");
console.log(join);
