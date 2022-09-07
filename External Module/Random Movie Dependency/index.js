/*

    Using Dependency (Package) of npm

    Steps
    
    1--> npm init (only one time in same repository)
    2--> Go to https://www.npmjs.com/ link
    3--> Search Dependency (Package) name. Here name is random-movie-names
    4--> Install this dependency (package) by npm i random-movie-names command
    5--> After insall dependency (package), installation version see in package.json file
    6--> Require this package
    7--> Use this dependency (package) by calling it's function such as getRandomFruitsName()


*/

//require this package
const randommovies=require('random-movie-names');

//Use this dependency (package)
console.log(randommovies(5));