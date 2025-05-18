function sumArry(argArry) {
    sum = 0;
    for(let i=0 ; i<argArry.length ; i++) {
        sum += argArry[i];
    }
    return sum
}

console.log(sumArry([1,2,3,4,5,6,7,8,9,10]));