let arry =[
    {id:1,name:'morita'},
    {id:2,name:'kenji'},
    {id:4,name:'uro'},
    {id:3,name:'ken'}
];

arry.sort(function(a, b) {
    // return a.id - b.id;
    return a.id > b.id;

});

// arry.sort((a, b) => a.id - b.id);
console.log(arry);