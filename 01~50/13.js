function createCounter() {
    let count = 0; // 関数内に閉じ込められた変数

    return function next() {
        count++;
        return count;
    };
}

const next = createCounter();

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
console.log(next()); 
console.log(next()); 
console.log(next()); 

  