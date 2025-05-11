const array = ['a', 'b', 'c'];
const array_log1 = array.join(" ");
console.log(array_log1);


let array_log2 = "";
for (let i=0 ; i<array.length ; i++) {
    array_log2 += array[i];
}

console.log(array_log2);