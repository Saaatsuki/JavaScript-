const mm_ft2 = (argNum) => argNum * 10.7639;
const mm_ac = (argNum) => argNum / 4046.86;

function printFunction(argInputNum) {
    console.log(`${argInputNum} 제곱미터 는 ${mm_ft2(argInputNum)} 평빙피트입니다.`);
    console.log(`${argInputNum} 제곱미터 는 ${mm_ac(argInputNum)} 에이커입니다.`);
}


printFunction(10);