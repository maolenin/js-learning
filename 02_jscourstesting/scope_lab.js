// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

console.log(globalVar); //Output: "I'm a global variable"
console.log(globalLet); //Output: "I'm also global, but scoped with let";
console.log(globalConst); //Output: "I'm a global const"

//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst); 

function show(){
    var fucntionVar = "I'm a block-scoped var";
    let fucntionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); //throws ReferenceError
//console.log(functionLet); //throws ReferenceError
//console.log(functionConst); //throws ReferenceError

{
    var newBlockVar = "I'm a new block-scoped var";
    let newBlockLet = "I'm a new block-scoped let";
    const newBlockConst = "I'm a new block-scoped const";

    console.log(newBlockVar);
    console.log(newBlockLet);
    console.log(newBlockConst); 
    
}
