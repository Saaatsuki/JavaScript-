const testAvg = (argMat, argSci, argEng) => (argMat + argSci + argEng) / 3;

function testScore(argMat, argSci, argEng) {
    const avg = testAvg(argMat, argSci, argEng);

    if (avg >= 90) {
        return { grade: "A", avg: avg };
    } else if (avg >= 80) {
        return { grade: "B", avg: avg };
    } else if (avg >= 70) {
        return { grade: "C", avg: avg };
    } else {
        return { grade: "F", avg: avg };
    }
}

const printFunction = (avg, grade) => {
    console.log(`평균 점수: ${avg.toFixed(2)}점\n학점은 ${grade}입니다.`);
};


const result = testScore(92, 85, 88);
printFunction(result.avg, result.grade);
