//object destructuring

let option={
    name:"Vimal",
    packet: 5,
    type: "kesar"
};


let{name:xxx,packet,type}= option;

console.log(xxx);
console.log(packet);
console.log(type);