const a = { a: 'a' };
const b = { b: 'b' };

const c = {...a , ...b};
const d = Object.assign({},a,b)

console.log(c);
console.log(d);

