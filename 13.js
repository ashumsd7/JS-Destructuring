var salaries={
    "John" :100,
    "Pete" :300,
    "Mary" :250

}

function topSalary(salaries){

var mynewObj= {
    John,
    Pete,
    Mary
}= salaries;

let MaxSalary= Math.max(John,Pete,Mary);
// console.log(MaxSalary);
    
var PerosonArray = Object.entries(salaries);

 console.log(PerosonArray);


 for (let [key,value] of PerosonArray)
 {
     if (value==300)
     console.log(key);
 }

}

topSalary(salaries);