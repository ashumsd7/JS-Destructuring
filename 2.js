//simple destructuring
var[n1,...n2]= [1,2,3,4,5];

// console.log(n1);
// console.log(n2);

function getNumArray(){

    return [1,2,3,4,5];

}

var[n1,...n2]= getNumArray();

console.log(n1);
console.log(n2);