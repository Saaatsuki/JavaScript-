function createCounter() {
    let count = 0; // 関数内に閉じ込められた変数

    return function next() {
    count++;
    return count;
    };
}

const next = createCounter();

console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 
console.log(next()); 

  