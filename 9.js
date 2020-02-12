let GovtDta ={

population: "1Billion",
Prime: "Modi",
States:28,
UT:8

};


let {population, ...rest} = GovtDta;

 console.log(population);
 console.log(rest.Prime);
 console.log(rest.States);
 console.log(rest.UT);

