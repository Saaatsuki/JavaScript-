const a = {a:`a`};
const b = {b:`b`};

const c = Object.assign({},a,b);

// const c = {...a, ...b};


// const c =  Object.assign({},a,b);
// // Object.assign は、複数のオブジェクトを1つにまとめるメソッド。
// // 最初の引数 {} は「空のオブジェクト」で、ここに a と b の内容をコピーする。
// // a と b のプロパティがマージされて、c に代入される。
// console.log(c);

// const c = {...a , ...b};

// const c = Object.assign({},a,b);1

console.log(c);

const d = {a:1,b:2,c:3};
const e = {...d , d:4,e:5};
console.log(e);

const {f,...g} = {f:1,b:2,c:3,d:4,e:5}
console.log(f);
console.log(g);