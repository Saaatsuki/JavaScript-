function ageDiscrimination(argAge) {
    // let msg = "";
    if (argAge <= 12) {
        return "어린이";
    } else if (13 <= argAge && argAge <= 18) {
        return "청소년";
    } else {
        return "성인";
    }
}

function printFunction(argMsg) {
    console.log(`${argMsg} 이용관을 사용할 수 있습니다`);
}



printFunction(ageDiscrimination(10));  

printFunction(ageDiscrimination(16));  

printFunction(ageDiscrimination(25));  
