function maxNum(argArry) {
    let maxNum = argArry[0];
    for(let i=0 ; i<argArry.length ; i++) {
        if (maxNum < argArry[i]) {
            maxNum = argArry[i];
        }
    }
    return maxNum
}

console.log(maxNum([1,2,8,1,5,9,7,10,5,4,2,3,1]));