const a = {a:`a`};
const b = {b:`b`};

// const c = {...a, ...b};
const c =  Object.assign({},a,b);
console.log(c);


