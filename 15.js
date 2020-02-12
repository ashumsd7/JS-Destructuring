var salaries={
    "Ashu" :100,
    "Abdul" :300,
    "Asim" :250

}

function topSalary(salaries){

    let max=0;
    letmaxName= null;

    for(const[name, salary] of Object.entries(salaries)){
        if(max<salary)
        {
            max= salary;
            maxName= name;
        }
    }

    return maxName;
}


let NameOfPersonWithMaxSalary= topSalary(salaries);

console.log(NameOfPersonWithMaxSalary);


console.log(Math.max());