const arry = ['aa','bb','cc','dd','ee','ff','gg'];

// const newArry = arry.slice(3,6);
// const newArry = arry.splice(3,3);
// const newArry = arry.slice(-4,-1);
const newArry = arry.filter((val,idx)=> idx>=3 && idx<=5);
// 配列.filter((要素, インデックス) => 条件式);




console.log(newArry);
