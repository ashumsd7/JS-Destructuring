//nested destructuring

let option={
    size:
    {
        height:100,
        width:50
    },
    items: ["cake", "water"],
    extra:true
};


let{
    size:{
        width,
        height
    },
    items: [item1,item2],
    title= "Menu"
} = option;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);




