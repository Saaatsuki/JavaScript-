const a = {a:`a`};
const b = {b:`b`};

// const c = {...a, ...b};


// const c =  Object.assign({},a,b);
// // Object.assign は、複数のオブジェクトを1つにまとめるメソッド。
// // 最初の引数 {} は「空のオブジェクト」で、ここに a と b の内容をコピーする。
// // a と b のプロパティがマージされて、c に代入される。
// console.log(c);

// const c = {...a , ...b};

const c = Object.assign({},a,b);

console.log(c);


