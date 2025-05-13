let arry =[
    {id:1,name:'morita'},
    {id:2,name:'kenji'},
    {id:4,name:'uro'},
    {id:3,name:'ken'}
];

arry.sort(function(a,b) {
    return a.id - b.id
})

console.log(arry);


arry.sort(function(a,b) {
    return b.id - a.id;
})

console.log(arry);

arry.sort((a,b) => a.id - b.id)
console.log(arry);