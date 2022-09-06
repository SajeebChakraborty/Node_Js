

//array function name "getName"

const getName=()=>{

    return "My Name";

};

const getAge=()=>{

    return "My age";

};


// export this to find out the module

// exports.getName=getName;
// exports.getAge=getAge;

module.exports={

    getAge,
    getName,

}