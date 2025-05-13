const array = ['a', 'b', 'c'];
console.log(array.join(""));

let str = "";
for (let i=0 ; i<array.length ; i++ ) {
    str += array[i];
}

console.log(str);