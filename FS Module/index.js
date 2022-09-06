/*

    Fs module needed for using write file, rename file, write flle sync etc function


*/

// import fs module
const fs=require('fs');

//chech which function in fs module
console.log(fs);

fs.writeFile('sample.txt','this is a sample text',(error)=>{

    //if error created when we write file
    if(error)
    {
        console.log(error);
    }
    else
    {

        console.log('Successfull writing file...');

    }


});

// attach text with previous file content
fs.appendFile('sample.txt',' another text writing',(error)=>{

    if(error)
    {

        console.log(error);

    }
    else
    {

        console.log('Successfull writing file...');

    }


});

// read the file
fs.readFile('sample.txt', 'utf-8', (data,error)=>{

    if(error)
    {

        console.log(error);

    }
    else
    {

        console.log(data);

    }



});


// rename the file
fs.rename('sample.txt','sample2.txt',(error)=>{

    //if error created when we write file
    if(error)
    {
        console.log(error);
    }
    else
    {

        console.log('Successfull rename file...');

    }


});


// delete the file
fs.unlink('sample2.txt',(error)=>{

    //if error created when we write file
    if(error)
    {
        console.log(error);
    }
    else
    {

        console.log('Successfull delete file...');

    }


});

//check file is exist or not
fs.exists('sample2.txt',(result)=>{

    if(result)
    {

        console.log('exist');

    }
    else
    {

        console.log('not exist');

    }


});



